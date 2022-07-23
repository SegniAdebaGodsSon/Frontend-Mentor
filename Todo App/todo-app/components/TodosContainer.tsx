import { Reorder } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

interface Props { }

const TodosContainer: React.FC<Props> = ({ }) => {
    const todoCtx = useContext(TodoContext);
    const [count, setCount] = useState(0);
    const todos = todoCtx?.todos,
        setTodos = todoCtx?.setTodos,
        filter = todoCtx?.filter,
        setFilter = todoCtx?.setFilter;

    const handleClearCompleted = () => {
        if (setTodos) {
            setTodos((prev) => {
                let newTodos = [...prev];
                newTodos = newTodos.filter((todo) => {
                    if (!todo.completed) return todo;
                });
                return newTodos;
            });
        }
    };

    const handleChangeFilter = (newFilter: 'all' | 'completed' | 'active') => {
        if (setFilter) {
            setFilter(newFilter);
        }
    };

    const inActiveFilterButton =
        'text-lightTheme-dark-grayish-blue dark:text-darkTheme-dark-grayish-blue cursor-pointer hover:text-lightTheme-very-dark-grayish-blue hover:dark:text-darkTheme-light-grayish-blue transition ease-in .1s';

    useEffect(() => {
        const itemsLeftCounter = () => {
            if (!todos) return 0;
            let complete = 0;
            todos?.forEach((todo) => (todo.completed ? complete++ : 0));
            if (filter == 'active' || filter == 'all') {
                return todos.length - complete;
            } else {
                return complete;
            }
        };

        setCount(itemsLeftCounter());
    }, [filter, todos]);

    let filterSwitcher = (
        <div className='flex justify-center gap-5 rounded-md bg-white py-[14px] px-5 text-sm font-bold dark:bg-darkTheme-very-dark-desaturated-blue sm:text-xs'>
            <button
                onClick={() => handleChangeFilter('all')}
                className={`${filter == 'all'
                    ? 'text-primary-bright-blue'
                    : inActiveFilterButton
                    }`}
            >
                All
            </button>
            <button
                onClick={() => handleChangeFilter('active')}
                className={`${filter == 'active'
                    ? 'text-primary-bright-blue'
                    : inActiveFilterButton
                    }`}
            >
                Active
            </button>
            <button
                onClick={() => handleChangeFilter('completed')}
                className={`${filter == 'completed'
                    ? 'text-primary-bright-blue'
                    : inActiveFilterButton
                    }`}
            >
                Completed
            </button>
        </div>
    );

    if (!todos || !setTodos) return <></>;

    return (
        <div>
            <div className='shadow-lightTheme-very-dark-grayish-blue/4 divide-y-[1px] divide-lightTheme-very-light-grayish-blue overflow-hidden rounded-md shadow-2xl dark:divide-darkTheme-very-dark-grayish-blue  dark:shadow-black'>
                <Reorder.Group
                    axis='y'
                    values={todos}
                    onReorder={setTodos}
                >
                    {todos?.map((todo, index) => {
                        if (filter == 'active' && todo.completed) {
                            return;
                        }
                        if (filter == 'completed' && !todo.completed) {
                            return;
                        }

                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                setTodos={setTodos}
                            />
                        );
                    })}
                </Reorder.Group>

                <div className='last-li flex items-center justify-between bg-white py-[14px] px-5 dark:bg-darkTheme-very-dark-desaturated-blue'>
                    <p className='text-xs text-lightTheme-dark-grayish-blue dark:text-darkTheme-dark-grayish-blue'>
                        {count} {count == 1 ? 'item' : 'items'}{' '}
                        {filter === 'completed' ? 'done' : 'left'}
                    </p>
                    <div className='hidden sm:block'>{filterSwitcher}</div>
                    <button
                        onClick={() => handleClearCompleted()}
                        className='.1s cursor-pointer text-xs text-lightTheme-dark-grayish-blue transition ease-in hover:text-lightTheme-very-dark-grayish-blue dark:text-darkTheme-dark-grayish-blue hover:dark:text-darkTheme-light-grayish-blue'
                    >
                        Clear completed
                    </button>
                </div>
            </div>

            <div className='shadow-lightTheme-very-dark-grayish-blue/4 dark:black/2 mt-4 shadow-2xl  sm:hidden'>
                {filterSwitcher}
            </div>

            <p className='mt-12 text-center text-sm text-lightTheme-dark-grayish-blue dark:text-darkTheme-dark-grayish-blue sm:text-xs'>
                Drag and drop to reorder list
            </p>
        </div>
    );
};
export default TodosContainer;
