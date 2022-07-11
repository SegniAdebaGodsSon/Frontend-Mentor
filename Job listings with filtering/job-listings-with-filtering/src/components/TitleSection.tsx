import React from 'react';
import Logo from './Logo';
import StatusTablet from './StatusTablet';
import TimeContractLocation from './TimeContractLocation';

interface Props {
    logo: string;
    company: string;
    isNew: boolean;
    isFeatured: boolean;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
}

const TitleSection: React.FC<Props> = ({
    logo,
    company,
    isNew,
    isFeatured,
    position,
    postedAt,
    contract,
    location,
}) => {
    const TimeContractLocationProps = {
        postedAt,
        contract,
        location,
    };

    return (
        <div className='flex flex-col gap-x-6 gap-y-2 md:flex-row md:items-center'>
            <Logo src={logo} alt={company + ' logo'} />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-6'>
                    <h1 className='font-bold text-primary-desaturated-dark-cyan md:text-xl'>
                        {company}
                    </h1>
                    <StatusTablet isNew={isNew} isFeatured={isFeatured} />
                </div>

                <h1 className='cursor-pointer font-bold hover:text-primary-desaturated-dark-cyan md:text-2xl'>
                    {position}
                </h1>

                <TimeContractLocation {...TimeContractLocationProps} />
            </div>
        </div>
    );
};
export default TitleSection;
