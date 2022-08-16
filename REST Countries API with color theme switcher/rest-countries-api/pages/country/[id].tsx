/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { ApolloError, gql } from '@apollo/client';
import client from '../../apollo-client';
import CountryDetails, { Border } from '../../Types/CountryDetails';
import Link from 'next/link';
import BorderCountryLink from '../../components/BorderCountryLink';
import { motion, Variants } from 'framer-motion';

interface Props {
    country: CountryDetails | null;
    error: string | null;
}

const CountriesByCode = gql`
    query CountryByCode($alpha3Code: String) {
        countries(alpha3Code: $alpha3Code) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

const IdsQuery = gql`
    query Ids {
        countries {
            edges {
                node {
                    id
                }
            }
        }
    }
`;

const CountryByIDQuery = gql`
    query Query($countryId: ID!) {
        country(id: $countryId) {
            id
            name
            flag
            nativeName
            population
            region
            subregion
            capital
            topLevelDomain
            currencies {
                edges {
                    node {
                        name
                    }
                }
            }
            languages {
                edges {
                    node {
                        name
                    }
                }
            }
            borders
        }
    }
`;

const imgVariants: Variants = {
    initial: {
        opacity: 0,
        y: -100,
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
        },
    },
};

const infoVariants: Variants = {
    initial: {
        opacity: 0,
        y: -100,
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1.5,
        },
    },
};

const borderVariants: Variants = {
    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5,
        },
    },
};

const Country: React.FC<Props> = ({ country, error }) => {
    // useEffect(() => {
    //     console.log(country);
    //     console.log(error);
    // }, [error, country]);

    if (!country) return null;
    return (
        <>
            <Head>
                <title>{country.name}</title>
            </Head>

            <Link href={'/'} className="cursor-pointer">
                <span className="flex gap-2 w-fit font-semibold items-center justify-center bg-white dark:bg-neutral-dark-blue px-8 pr-9 py-2 shadow-lg hover:scale-95 hover:shadow-sm transition-transform ease-in duration-150 rounded-md cursor-pointer">
                    <HiArrowNarrowLeft size={25} />
                    <span>Back</span>
                </span>
            </Link>

            <div className="mt-20">
                <div className="flex flex-col gap-y-7 lg:flex-row gap-x-[120px] lg:items-center">
                    <div className="">
                        <motion.img
                            initial="initial"
                            animate="animate"
                            variants={imgVariants}
                            className="w-full max-w-md md:max-w-none md:w-[560px] mx-auto"
                            src={country.flag}
                            alt={country.name + ' flag'}
                        />
                    </div>

                    <div className="">
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={infoVariants}
                            className="flex flex-col flex-wrap md:flex-row  gap-x-[160px] "
                        >
                            <div>
                                <h1 className="font-extrabold text-2xl mb-6 md:text-3xl">
                                    {country.name}
                                </h1>
                                <ul className="flex flex-col gap-y-3">
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Native name:
                                        </span>{' '}
                                        {country.nativeName}
                                    </li>
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Population:
                                        </span>{' '}
                                        {country.population.toLocaleString()}
                                    </li>
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Region:
                                        </span>{' '}
                                        {country.region}
                                    </li>
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Sub Region:
                                        </span>{' '}
                                        {country.subRegion}
                                    </li>
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Capital:
                                        </span>{' '}
                                        {country.capital}
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12">
                                <ul className="flex flex-col gap-y-3">
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Top Level Domain:
                                        </span>{' '}
                                        {country.topLevelDomain.join(', ')}
                                    </li>
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Currencies:
                                        </span>{' '}
                                        {country.currencies.join(', ')}
                                    </li>
                                    <li className="font-light dark:text-neutral-very-light-gray text-base">
                                        <span className="font-semibold dark:text-neutral-white">
                                            Languages:
                                        </span>{' '}
                                        {country.languages.join(', ')}
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={borderVariants}
                            className="mt-12 md:mt-[70px]"
                        >
                            <div className="flex items-center flex-wrap gap-x-2 gap-y-2">
                                <p className="font-semibold dark:text-neutral-white">
                                    Border Countries :
                                </p>
                                {country.borders.map(({ id, name }: Border) => (
                                    <BorderCountryLink
                                        key={id}
                                        id={id}
                                        name={name}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Country;

export async function getStaticPaths() {
    let paths: any[] = [];

    try {
        const { data, error } = await client.query({
            query: IdsQuery,
        });

        if (data) {
            data.countries.edges.forEach((edge: any) => {
                paths.push({
                    params: {
                        id: edge.node.id,
                    },
                });
            });
        }
    } catch (e) {}

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const id = context.params.id;
    let country: CountryDetails | null = null;
    let errorMessage: string | null = null;

    try {
        const { data, error } = await client.query({
            query: CountryByIDQuery,
            variables: { countryId: id },
        });

        if (data) {
            let d = data.country;
            let currencies: string[] = [];
            let languages: string[] = [];
            let borders: Border[] = [];

            for (let i = 0; i < d.borders.length; i++) {
                const b = d.borders[i];
                const { data, error } = await client.query({
                    query: CountriesByCode,
                    variables: {
                        alpha3Code: b,
                    },
                });
                if (data) {
                    const borderObject: Border = {
                        id: data.countries.edges[0].node.id,
                        name: data.countries.edges[0].node.name,
                    };
                    borders.push(borderObject);
                }
            }

            d.currencies.edges.forEach((edge: any) => {
                currencies.push(edge.node.name);
            });

            d.languages.edges.forEach((edge: any) => {
                languages.push(edge.node.name);
            });

            country = {
                id: d.id,
                borders: borders,
                capital: d.capital,
                flag: d.flag,
                name: d.name,
                nativeName: d.nativeName,
                population: d.population,
                region: d.region,
                subRegion: d.subregion,
                topLevelDomain: d.topLevelDomain,
                languages: languages,
                currencies: currencies,
            };
        }

        if (error) {
            errorMessage = error.message;
        }
    } catch (e) {
        errorMessage = (e as ApolloError).message;
    }

    return {
        props: { country, error: errorMessage },
    };
}
