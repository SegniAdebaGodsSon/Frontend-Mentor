import React from 'react';
import Job from 'Types/Job';
import TitleSection from './TitleSection';
import ToolsTablet from './ToolsTablet';

interface Props {
    data: Job;
}

const Card: React.FC<Props> = ({ data }) => {
    const tools: string[] = [
        data.role,
        data.level,
        ...data.languages,
        ...data.tools,
    ];

    return (
        <div
            className={`flex max-w-[328px] flex-col gap-x-12 divide-y divide-solid rounded-md bg-white p-6 shadow-xl-cyan md:w-full  md:max-w-full md:flex-row md:items-center md:justify-between md:divide-none md:px-10 md:pb-3 ${
                data.featured
                    ? 'border-l-[5px] border-solid border-l-primary-desaturated-dark-cyan'
                    : ''
            }`}
        >
            <div className='mt-[-44px] pb-4 md:mt-0 md:pt-0'>
                <TitleSection
                    company={data.company}
                    logo={data.logo}
                    isNew={data.new}
                    isFeatured={data.featured}
                    position={data.position}
                    postedAt={data.postedAt}
                    contract={data.contract}
                    location={data.location}
                />
            </div>

            <div className='ml-auto flex flex-wrap gap-4 pt-4 md:pt-0'>
                {tools.map((tag, index) => (
                    <ToolsTablet key={index} tag={tag} />
                ))}
            </div>
        </div>
    );
};
export default Card;
