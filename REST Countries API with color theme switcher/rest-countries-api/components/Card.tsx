import React from 'react'

interface Props {
    name: string,
    population: number,
    flag: string,
    region: string,
    capital: string
}

const Card: React.FC<Props> = ({ name, population, region, capital, flag }) => {
    return <div className='max-w-[328px] md:max-w-[264px] overflow-hidden rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all ease-in duration-200'>
        <img className='w-full' src={flag} alt="usa flag" />
        <div className='flex flex-col gap-y-1 py-9 px-7 md:px-6 bg-neutral-white dark:bg-neutral-dark-blue'>
            <h1 className='font-extrabold text-xl mb-5'>{name}</h1>
            <p className='font-light dark:text-neutral-very-light-gray text-sm'><span className='font-semibold dark:text-neutral-white'>Population:</span> {population.toLocaleString()}</p>
            <p className='font-light dark:text-neutral-very-light-gray text-sm'><span className='font-semibold dark:text-neutral-white'>Region:</span> {region}</p>
            <p className='font-light dark:text-neutral-very-light-gray text-sm'><span className='font-semibold dark:text-neutral-white'>Capital:</span> {capital}</p>
        </div>
    </div>
}
export default Card;