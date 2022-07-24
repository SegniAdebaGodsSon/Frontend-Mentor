import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import RegionDropdown from '../components/RegionDropdown'
import SearchBar from '../components/SearchBar'
import Region from '../Types/Region'


const Home: NextPage = () => {

    const [nameFilter, setNameFilter] = useState('');
    const [regionFilter, setRegionFilter] = useState<Region>('');


    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <main className="py-[30px] container">
                <form onSubmit={e => e.preventDefault()}>
                    <div className='flex flex-wrap justify-between gap-y-3'>
                        <SearchBar setNameFilter={setNameFilter} />
                        <RegionDropdown setRegionFilter={setRegionFilter} />
                    </div>
                    {nameFilter}
                    {regionFilter}
                </form>
            </main>

        </>
    )
}

export default Home
