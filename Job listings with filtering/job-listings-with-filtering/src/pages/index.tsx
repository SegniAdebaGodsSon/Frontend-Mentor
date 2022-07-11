import { AppContext } from 'next/app';
import Head from 'next/head';
import path from 'path';
import fs from 'fs';
import Job from 'Types/Job';
import Card from '@/components/Card';
import { JobsFilterContext } from 'Hooks/JobsContext';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import FilterTablet from '@/components/FilterTablet';

interface Props {
    data: [Job];
}

const checkFilter = (job: Job, filters: string[]) => {
    if (filters.length == 0) return true;
    const jobTools = [job.role, job.level, ...job.languages, ...job.tools];

    for (const filter of filters) {
        if (!jobTools.includes(filter)) return false;
    }

    return true;
};

const topOffset = (ref: MutableRefObject<HTMLDivElement | null>) => {
    return ref.current ? 156 - ref.current.offsetHeight / 2 : 156 - 67.5;
};

export default function HomePage(data: Props) {
    const [filters, setFilters] = useState<string[]>([]);
    const filtersRef = useRef<HTMLDivElement | null>(null);
    const [topOffsetPercentage, setTopOffsetPercentage] = useState(
        topOffset(filtersRef)
    );

    useEffect(() => {
        setTopOffsetPercentage(topOffset(filtersRef));
    }, [filters]);

    return (
        <>
            <Head>
                <title>FrontendMentor | Job Listings With Filtering</title>
            </Head>

            <JobsFilterContext.Provider value={{ filters, setFilters }}>
                <header className='relative h-[156px] bg-primary-desaturated-dark-cyan bg-header-bg-mobile md:bg-header-bg-desktop'>
                    {true ? (
                        <div
                            ref={filtersRef}
                            className={`ease absolute left-0 right-0 mx-auto flex w-full max-w-[1110px] px-6 transition-all duration-300`}
                            style={{
                                top: topOffsetPercentage + 'px',
                                opacity: filters.length > 0 ? 1 : 0,
                            }}
                        >
                            <div className='flex w-full justify-between rounded-md bg-white p-5 shadow-xl-cyan md:px-10'>
                                <div className='flex flex-wrap gap-4 '>
                                    {filters.map((item, index) => (
                                        <FilterTablet key={index} tag={item} />
                                    ))}
                                </div>

                                <button
                                    onClick={() => setFilters([])}
                                    className='font-semibold text-neutral-dark-grayish-cyan transition-all duration-200 ease-in hover:text-primary-desaturated-dark-cyan hover:underline'
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </header>

                <main className='mx-auto max-w-[1110px] px-6 pt-[75px]'>
                    <div className='my-6 flex flex-col items-center gap-10 md:gap-6'>
                        {data.data.map((job: Job, index: number) => {
                            if (checkFilter(job, filters)) {
                                return <Card key={index} data={job} />;
                            }
                        })}
                    </div>
                </main>
            </JobsFilterContext.Provider>
        </>
    );
}

export async function getStaticProps(context: AppContext) {
    const dataFilePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const data: Job[] = JSON.parse(fileContents);

    return {
        props: {
            data,
        },
    };
}
