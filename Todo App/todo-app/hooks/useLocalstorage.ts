import { useEffect, useState } from "react";
import Todo from "../types/Todo";
import { v4 as uuidv4 } from 'uuid';



const defaultTodos: Todo[] = [
    {
        id: uuidv4(),
        completed: false,
        task: "Learn NextJs with Typescript"
    },
    {
        id: uuidv4(),
        completed: false,
        task: "Learn tailwindcss"
    },
    {
        id: uuidv4(),
        completed: false,
        task: "Learn FramerMotion"
    },
    {
        id: uuidv4(),
        completed: false,
        task: "Learn SCSS"
    },
    {
        id: uuidv4(),
        completed: false,
        task: "Get hired!"
    }
] 

const readFromLocalStorage = () => {
    if (localStorage && localStorage.getItem('todos')) {
        const localTodos: Todo[] = JSON.parse(
            localStorage.getItem('todos')!
        );
        return localTodos;
    }

    return null;
};

export const useLocalstorage = () => {
    const [ state, setState ] = useState<Todo[]>([]);

    // first render 
    useEffect(() => {
        const localTodos = readFromLocalStorage(); 
        if(localTodos && localTodos.length > 0) setState(localTodos);
    }, []);

    // on state change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    return { todos: state,  setTodos: setState }
}