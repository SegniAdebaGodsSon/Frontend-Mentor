import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
interface Props { }

const Navbar: React.FC<Props> = ({ }) => {
    return (
        <nav className=" shadow-lg bg-neutral-white dark:bg-neutral-dark-blue">
            <div className="container">
                <div className="h-[100px] flex justify-between items-center">
                    <h1 className="font-extrabold text-base md:text-lg">
                        Where in the world?
                    </h1>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
