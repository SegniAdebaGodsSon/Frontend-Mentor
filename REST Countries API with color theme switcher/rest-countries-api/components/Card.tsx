/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Country from '../Types/Country';
interface Props extends Country {}

const Card: React.FC<Props> = ({
    id,
    name,
    population,
    region,
    capital,
    flag,
}) => {
    return (
        <Link href={`/country/${id}`}>
            <div className="max-w-[328px] md:max-w-[280px] overflow-hidden rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all ease-in duration-200 hover:cursor-pointer">
                <img
                    className="w-full"
                    src={flag}
                    alt="usa flag"
                    loading="lazy"
                />
                <div className="flex flex-col gap-y-1 pt-7 pb-16 px-7 md:px-6 bg-neutral-white dark:bg-neutral-dark-blue">
                    <h1 className="font-extrabold text-xl mb-4">{name}</h1>
                    <p className="font-light dark:text-neutral-very-light-gray text-lg md:text-sm">
                        <span className="font-semibold dark:text-neutral-white">
                            Population:
                        </span>{' '}
                        {population.toLocaleString()}
                    </p>
                    <p className="font-light dark:text-neutral-very-light-gray text-lg md:text-sm">
                        <span className="font-semibold dark:text-neutral-white">
                            Region:
                        </span>{' '}
                        {region}
                    </p>
                    <p className="font-light dark:text-neutral-very-light-gray text-lg md:text-sm">
                        <span className="font-semibold dark:text-neutral-white">
                            Capital:
                        </span>{' '}
                        {capital}
                    </p>
                </div>
            </div>
        </Link>
    );
};
export default Card;
