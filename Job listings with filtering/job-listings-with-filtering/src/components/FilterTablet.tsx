import { JobsFilterContext } from 'Hooks/JobsContext';
import { useContext } from 'react';
import JobsContext from 'Types/JobsContextValue';

interface Props {
    tag: String;
}

const removeFilter = (value: JobsContext | null, tag: String) => {
    if (value) {
        let oldList = [...value.filters];
        oldList = oldList.filter((item) => item !== tag);
        value.setFilters(oldList);
    }
};

const FilterTablet: React.FC<Props> = ({ tag }) => {
    const value = useContext(JobsFilterContext);

    return (
        <div className='flex h-8 cursor-pointer text-center'>
            <span className='block rounded-l-md bg-neutral-light-grayish-cyan px-[9px] font-bold leading-9 text-primary-desaturated-dark-cyan'>
                {tag}
            </span>
            <span
                onClick={() => removeFilter(value, tag)}
                className='block w-8 rounded-r-md bg-primary-desaturated-dark-cyan font-bold leading-9 text-white transition-all duration-200 ease-in hover:bg-neutral-very-dark-grayish-cyan '
            >
                X
            </span>
        </div>
    );
};
export default FilterTablet;
