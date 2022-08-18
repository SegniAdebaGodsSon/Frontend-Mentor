import type { NextPage } from 'next';
import Head from 'next/head';
import ExploreButton from '../components/ExploreButton';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <main className='h-screen bg-home-desktop bg-cover flex flex-col justify-center items-center'>
                <h1 className='text-neutral-white'>Space</h1>
                <ExploreButton />
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
