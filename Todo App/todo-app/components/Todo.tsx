import React, { useEffect, useRef, useState } from 'react';
import TodoType from '../types/Todo';
import Check from './Check';

interface Props extends TodoType {
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>> | undefined;
}

const Todo: React.FC<Props> = ({ task, completed, id, setTodos }) => {
    const handleDelete = () => {
        if (setTodos) {
            setTodos((prev) => {
                const newTodos: TodoType[] = [];
                prev.forEach((todo, ind) => {
                    if (todo.id !== id) newTodos.push(todo);
                });
                return newTodos;
            });
        }
    };

    const handleComplete = () => {
        if (setTodos) {
            setTodos((prev) => {
                prev.forEach((t) => {
                    if (t.id === id) {
                        t.completed = !completed;
                    }
                });
                const newTodos: TodoType[] = [...prev];
                return newTodos;
            });
        }
    };

    if (!setTodos) return <></>;

    return (
        <div
            draggable
            className='group flex flex-wrap items-center gap-4 bg-white py-[14px] px-5 dark:bg-darkTheme-very-dark-desaturated-blue'
        >
            <Check onClick={handleComplete} checked={completed} />
            <p
                className={`.2s cursor-pointer overflow-hidden text-xs transition ease-in sm:text-lg ${
                    completed
                        ? 'text-lightTheme-light-grayish-blue line-through dark:text-darkTheme-dark-grayish-blue'
                        : 'text-lightTheme-very-dark-grayish-blue dark:text-darkTheme-light-grayish-blue'
                } `}
            >
                {task}
            </p>

            <div
                onClick={() => handleDelete()}
                className='.2s ml-auto cursor-pointer transition ease-in sm:opacity-0 sm:group-hover:opacity-100'
            >
                <img src='/svgs/icon-cross.svg' alt='cross image' />
            </div>
        </div>
    );
};
export default Todo;
