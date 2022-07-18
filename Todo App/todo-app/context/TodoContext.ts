import { createContext } from 'react';
import TodoContext from '../types/TodoContextType';

export const TodoContext = createContext<TodoContext | null>(null);
