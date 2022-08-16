import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Region from '../Types/Region';

interface Props {
    setRegionFilter: Dispatch<SetStateAction<Region>>;
}

const RegionDropdown: React.FC<Props> = ({ setRegionFilter }) => {
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setRegionFilter(event.target.value as Region);
    };

    return (
        <div>
            <select
                onChange={(e) => onChangeHandler(e)}
                name="regions"
                id="regions"
                className="form-select border-none w-[250px] h-[60px] text-neutral-very-dark-blue dark:text-neutral-white bg-neutral-white dark:bg-neutral-dark-blue rounded-md px-[30px] shadow-md focus:ring-0 font-semibold cursor-pointer"
            >
                <option value="" hidden>
                    Filter by Region
                </option>
                <option className="font-semibold" value="Africa">
                    Africa
                </option>
                <option className="font-semibold" value="Americas">
                    Americas
                </option>
                <option className="font-semibold" value="Asia">
                    Asia
                </option>
                <option className="font-semibold" value="Europe">
                    Europe
                </option>
                <option className="font-semibold" value="Oceania">
                    Oceania
                </option>
            </select>
        </div>
    );
};
export default RegionDropdown;
