import React from 'react';

interface Props {
    isNew: boolean;
    isFeatured: boolean;
}

const StatusTablet: React.FC<Props> = ({ isNew, isFeatured }) => {
    return (
        <div className='flex items-center gap-x-2'>
            {isNew && (
                <span className='h-7 rounded-3xl bg-primary-desaturated-dark-cyan px-2.5 text-center font-semibold leading-[29px] text-white'>
                    NEW!
                </span>
            )}

            {isFeatured && (
                <span className='h-7 rounded-3xl bg-black px-2.5 text-center font-semibold leading-[29px] text-white'>
                    FEATURED
                </span>
            )}
        </div>
    );
};
export default StatusTablet;
