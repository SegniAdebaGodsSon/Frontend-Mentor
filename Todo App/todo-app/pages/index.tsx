import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import AddTodo from '../components/AddTodo';
import TitleRow from '../components/TitleRow';
import TodosContainer from '../components/TodosContainer';
import { TodoContext } from '../context/TodoContext';
import { useLocalstorage } from '../hooks/useLocalstorage';

const Home: NextPage = () => {
    const { todos, setTodos } = useLocalstorage();
    const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

    return (
        <TodoContext.Provider value={{ todos, setTodos, filter, setFilter }}>
            <div className='bg-lightTheme-very-light-gray dark:bg-darkTheme-very-dark-blue'>
                <Head>
                    <title>Frontend Mentor | Todo App</title>
                </Head>

                <header className='bg-header h-[200px] bg-header-mobile-light bg-cover bg-no-repeat dark:bg-header-mobile-dark sm:h-[300px] sm:bg-header-desktop-light sm:dark:bg-header-desktop-dark'>
                    <div className='mx-auto w-[327px] pt-11 sm:w-full sm:max-w-[540px] sm:pt-[78px]'>
                        <TitleRow />
                    </div>
                </header>

                <main className='min-h-screen'>
                    <div className='mx-auto -mt-[92px] w-[327px] sm:-mt-[142px] sm:w-full sm:max-w-[540px]'>
                        <div className='mb-4'>
                            <AddTodo />
                        </div>

                        <TodosContainer />
                    </div>
                </main>
            </div>
        </TodoContext.Provider>
    );
};

export default Home;
