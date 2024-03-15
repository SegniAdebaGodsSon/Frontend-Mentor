import { JobsFilterContext } from 'Hooks/JobsContext';
import React, { useContext } from 'react';
import JobsContext from 'Types/JobsContextValue';

interface Props {
    tag: string;
}

const addFilter = (value: JobsContext | null, tag: string) => {
    if (value) {
        let oldList = [...value.filters];
        if (!oldList.includes(tag)) {
            oldList.push(tag);
        }

        value.setFilters(oldList);
    }
};

const TagTablet: React.FC<Props> = ({ tag }) => {
    const value = useContext(JobsFilterContext);

    return (
        <span
            onClick={() => addFilter(value, tag)}
            className='h-[32px] cursor-pointer rounded-md bg-neutral-light-grayish-cyan px-[9px] font-bold leading-10 text-primary-desaturated-dark-cyan transition-all duration-200 ease-in hover:bg-primary-desaturated-dark-cyan hover:text-white'
        >
            {tag}
        </span>
    );
};
export default TagTablet;
