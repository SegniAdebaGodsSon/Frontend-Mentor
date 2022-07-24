import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
    setNameFilter: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setNameFilter }) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNameFilter(event.target.value);
    };

    return (
        <div className="flex max-w-[480px] md:max-w-none md:w-[480px] gap-x-3 px-10 h-[60px] items-center bg-neutral-white dark:bg-neutral-dark-blue shadow-md rounded-md">
            <AiOutlineSearch
                className="fill-neutral-dark-gray dark:fill-neutral-very-light-gray"
                size={28}
            />
            <input
                onChange={(e) => onChangeHandler(e)}
                type="text"
                className="border-none w-full placeholder:text-neutral-dark-gray dark:placeholder:text-neutral-very-light-gray py-1 px-2 dark:bg-neutral-dark-blue focus:ring-0"
                placeholder="Search for a country..."
            />
        </div>
    );
};
export default SearchBar;
