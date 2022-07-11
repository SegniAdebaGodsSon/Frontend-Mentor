import React from 'react';

interface Props {
    postedAt: string;
    contract: string;
    location: string;
}

const TimeContractLocation: React.FC<Props> = ({
    postedAt,
    contract,
    location,
}) => {
    return (
        <div className='flex items-center gap-2.5 font-medium text-neutral-dark-grayish-cyan md:text-lg'>
            <p>{postedAt}</p>
            <p className='pb-2 font-bold'>.</p>
            <p>{contract}</p>
            <p className='pb-2 font-bold'>.</p>
            <p>{location}</p>
        </div>
    );
};
export default TimeContractLocation;
