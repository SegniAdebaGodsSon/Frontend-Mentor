import { Dispatch, SetStateAction } from 'react';
import Todo from './Todo';

export default interface TodoContext {
    filter: 'all' | 'completed' | 'active';
    setFilter: Dispatch<SetStateAction<'all' | 'completed' | 'active'>>;
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
}
