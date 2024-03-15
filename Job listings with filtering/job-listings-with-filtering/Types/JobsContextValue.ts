import { Dispatch, SetStateAction } from 'react';

export default interface JobsContext {
    filters: string[];
    setFilters: Dispatch<SetStateAction<string[]>>;
}
