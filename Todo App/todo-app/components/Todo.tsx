import { Reorder, useMotionValue, Variants } from 'framer-motion';
import React from 'react';
import { useRaisedShadow } from '../hooks/useRaisedShadow';
import TodoType from '../types/Todo';
import Check from './Check';

interface Props {
    todo: TodoType,
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>> | undefined;
}

const liVariants: Variants = {
    hidden: { opacity: 0, scale: .5 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 15 } },
};

const Todo: React.FC<Props> = ({ todo, setTodos }) => {
    const { task, completed, id } = todo;

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

    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    if (!setTodos) return <></>;

    return (
        <Reorder.Item
            value={todo}
            key={id}
            style={{
                boxShadow,
                y
            }}
            variants={liVariants}
            initial='hidden'
            animate='show'
            className='group flex flex-wrap items-center gap-4 bg-white py-[14px] px-5 dark:bg-darkTheme-very-dark-desaturated-blue'>
            <Check onClick={handleComplete} checked={completed} />
            <p
                className={`.2s cursor-pointer overflow-hidden text-xs transition ease-in sm:text-lg ${completed
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
        </Reorder.Item>
    );
};
export default Todo;
