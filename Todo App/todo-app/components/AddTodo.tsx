import React, {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../context/TodoContext';
import Todo from '../types/Todo';

interface Props {}

const AddTodo: React.FC<Props> = () => {
    const textFieldRef = useRef<null | HTMLInputElement>(null);
    const todoCtx = useContext(TodoContext);
    const setTodos = todoCtx?.setTodos;

    const submitTodo = (e: KeyboardEvent) => {
        if (setTodos && e.key === 'Enter') {
            const rawString = textFieldRef.current?.value.trim();
            if (rawString && rawString !== '') {
                const newTodo: Todo = {
                    task: rawString,
                    completed: false,
                    id: uuidv4(),
                };
                setTodos((prev) => {
                    const newList = [...prev, newTodo];
                    return newList;
                });
            }

            if (textFieldRef.current) {
                textFieldRef.current.value = '';
            }
        }
    };

    useEffect(() => {
        if (textFieldRef.current) {
            const textField = textFieldRef.current;
            textField.addEventListener('keyup', submitTodo);
        }
        const textFieldElement = textFieldRef.current;
        return () => {
            textFieldElement?.removeEventListener('keyup', submitTodo);
        };
    }, []);

    return (
        <div className='flex items-center gap-2 rounded-md bg-white py-[14px] px-5 dark:bg-darkTheme-very-dark-desaturated-blue'>
            <div className='h-5 w-5 rounded-full border border-lightTheme-light-grayish-blue dark:border-darkTheme-dark-grayish-blue'></div>

            <div className='flex-1'>
                <input
                    maxLength={40}
                    className='w-full pt-[3px] pl-2 text-xs caret-primary-bright-blue outline-none dark:bg-darkTheme-very-dark-desaturated-blue sm:text-lg  '
                    ref={textFieldRef}
                    type='text'
                    name='new todo'
                    placeholder='Create a new todo...'
                />
            </div>
        </div>
    );
};
export default AddTodo;
