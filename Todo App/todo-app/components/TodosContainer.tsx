import React, { useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoType from '../types/Todo';
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

    const getDragAfterElement = (container: HTMLUListElement, y: number) => {
        let draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        interface elementType {
            offset: number,
            element: Element | undefined;
        }

        const initial: elementType = {
            offset: Number.NEGATIVE_INFINITY,
            element: undefined
        }

        return draggableElements.reduce((closest, child, index) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            }
            return closest;
        }, initial).element;
    }



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


    // handle 
    useEffect(() => {
        const draggableContainer: HTMLUListElement | null = document.querySelector('.draggable-container');
        const draggables: NodeListOf<HTMLLIElement> = document.querySelectorAll('.draggable');


        const dragOverEventHandler = (e: DragEvent) => {
            e.preventDefault();
            if (draggableContainer) {
                const afterElement = getDragAfterElement(draggableContainer, e.clientY);
                const dragging = document.querySelector('.dragging');
                const endOfList = document.querySelector('.last-li');
                if (!afterElement && dragging) {
                    draggableContainer.insertBefore(dragging, endOfList);
                } else {
                    if (dragging && afterElement) {
                        draggableContainer.insertBefore(dragging, afterElement);
                    }
                }
            }
        }

        let dragStartEventHandler = () => { };
        let dragEndEventHandler = () => { };

        draggables.forEach(draggable => {
            dragStartEventHandler = () => {
                draggable.classList.add('dragging');
            }
            draggable.addEventListener('dragstart', dragStartEventHandler);

            dragEndEventHandler = () => {
                draggable.classList.remove('dragging');
            }

            draggable.addEventListener('dragend', dragEndEventHandler);


        });

        if (draggableContainer) {
            draggableContainer.addEventListener('dragover', dragOverEventHandler);
        }



        return () => {
            draggables.forEach(draggable => {
                draggable.removeEventListener('dragstart', dragStartEventHandler);
                draggable.removeEventListener('dragend', dragEndEventHandler);
            })

            draggableContainer?.removeEventListener('dragover', dragOverEventHandler);
        }

    }, [todos, filter]);


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

    if (!todoCtx) return <></>;

    return (
        <div>
            <ul className='draggable-container shadow-lightTheme-very-dark-grayish-blue/4 divide-y-[1px] divide-lightTheme-very-light-grayish-blue overflow-hidden rounded-md shadow-2xl dark:divide-darkTheme-very-dark-grayish-blue  dark:shadow-black'>
                {todos?.map((todo, index) => {
                    if (filter == 'active' && todo.completed) {
                        return;
                    }
                    if (filter == 'completed' && !todo.completed) {
                        return;
                    }

                    return (
                        <li key={todo.id} className='draggable' data-id={todo.id} data-index={index}>
                            <Todo
                                task={todo.task}
                                completed={todo.completed}
                                setTodos={setTodos}
                                id={todo.id}
                            />
                        </li>
                    );
                })}
                <li className='last-li flex items-center justify-between bg-white py-[14px] px-5 dark:bg-darkTheme-very-dark-desaturated-blue'>
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
                </li>
            </ul>

            <div className='shadow-lightTheme-very-dark-grayish-blue/4 dark:black/2 mt-4 shadow-2xl  sm:hidden'>
                {filterSwitcher}
            </div>

            <p className='text-center text-sm sm:text-xs text-lightTheme-dark-grayish-blue dark:text-darkTheme-dark-grayish-blue mt-12'>Drag and drop to reorder list</p>
        </div>
    );
};
export default TodosContainer;
