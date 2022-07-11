import { createContext } from 'react';
import JobsContext from 'Types/JobsContextValue';

export const JobsFilterContext = createContext<JobsContext | null>(null);
