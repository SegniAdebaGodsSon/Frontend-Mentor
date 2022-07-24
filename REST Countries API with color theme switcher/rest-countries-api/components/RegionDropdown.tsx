import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import Region from '../Types/Region'

interface Props {
    setRegionFilter: Dispatch<SetStateAction<Region>>
}

const RegionDropdown: React.FC<Props> = ({ setRegionFilter }) => {
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setRegionFilter(event.target.value as Region)
    }

    return (
        <div>
            <select
                onChange={(e) => onChangeHandler(e)}
                name="regions"
                id="regions"
                className="form-select border-none w-[200px] md:w-[250px] h-[60px] text-neutral-very-dark-blue dark:text-neutral-white bg-neutral-white dark:bg-neutral-dark-blue rounded-md px-[30px] shadow-md focus:ring-0"
            >
                <option value="" hidden>
                    Region
                </option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}
export default RegionDropdown
