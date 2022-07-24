import type { NextPage } from 'next';
import Head from 'next/head';
import { Context, useState } from 'react';
import Card from '../components/Card';
import RegionDropdown from '../components/RegionDropdown';
import SearchBar from '../components/SearchBar';
import Country from '../Types/Country';
import FetchError from '../Types/FetchError';
import Region from '../Types/Region';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    countriesData: Country[],
    error: FetchError
}

const Home: NextPage<Props> = ({ countriesData, error }) => {
    const [nameFilter, setNameFilter] = useState('');
    const [regionFilter, setRegionFilter] = useState<Region>('');
    const [countries, _] = useState<Country[]>(countriesData);

    if (error) return <div>fetch error bro</div>

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
                        {countries.map(country => (
                            <Card
                                key={uuidv4()}
                                name={country.name}
                                flag={country.flag}
                                region={country.region}
                                capital={country.capital}
                                population={country.population}
                            />
                        ))
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
    // const res = await fetch('https://restcountries.com/v3.1/all/?fields=name,capital,population,region,flags');
    let countries: Country[] = [];
    let errorMessage: FetchError | null = null;
    try {
        const res = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,flag,independent,population');
        const data = await res.json();
        countries = data;
    } catch (e) {
        errorMessage = {
            message: (e as Error).message,
        }
    }

    return {
        props: {
            countriesData: countries,
            error: errorMessage
        },
    }
}