import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Card from '../components/Card';
import RegionDropdown from '../components/RegionDropdown';
import SearchBar from '../components/SearchBar';
import Country from '../Types/Country';
import Region from '../Types/Region';
import { v4 as uuidv4 } from 'uuid';
import { ApolloError, gql } from '@apollo/client';
import client from '../apollo-client';

const CountriesQuery = gql`
query Countries {
    countries {
        edges {
            node {
                name
                population
                flag
                capital
                region
            }
        }
    }
}`;

interface Props {
    data: Country[],
    error: string | null
}

const Home: NextPage<Props> = ({ data, error }) => {
    const [nameFilter, setNameFilter] = useState('');
    const [regionFilter, setRegionFilter] = useState<Region>('');
    const [countries, _] = useState<Country[]>(data);


    if (error) {
        return <div className='flex mt-10 justify-center h-screen text-red-600 dark:text-red-600'>{error}</div>
    }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className="py-[30px] container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-wrap justify-between gap-y-3">
                        <SearchBar setNameFilter={setNameFilter} />
                        <RegionDropdown setRegionFilter={setRegionFilter} />
                    </div>
                </form>

                <div className="py-10">
                    {/* Cards */}
                    <div className='flex flex-wrap gap-x-[50px] gap-y-[75px] justify-center items-start'>
                        {countries.map(country => {
                            const name = country.name.toLowerCase();
                            if (nameFilter !== '' && !name.includes(nameFilter.toLowerCase())) {
                                return null;
                            }

                            if (regionFilter !== '' && regionFilter !== country.region) {
                                return null;
                            }

                            return <Card
                                key={uuidv4()}
                                name={country.name}
                                flag={country.flag}
                                region={country.region}
                                capital={country.capital}
                                population={country.population}
                            />
                        }
                        )
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

// 

export async function getStaticProps() {
    let countries: Country[] = [];
    let errorMessage: string | null = null;


    try {
        const { data, error } = await client.query({
            query: CountriesQuery
        });

        if (data) {
            data.countries.edges.forEach((edge: any) => {
                const country: Country = {
                    name: edge.node.name,
                    capital: edge.node.capital,
                    flag: edge.node.flag,
                    population: edge.node.population,
                    region: edge.node.region
                }
                countries.push(country);
            })
        }

        if (error) {
            errorMessage = error.message;
        }

    } catch (e: unknown) {
        errorMessage = (e as ApolloError).message;
    }

    return {
        props: {
            data: countries,
            error: errorMessage
        }
    }
}