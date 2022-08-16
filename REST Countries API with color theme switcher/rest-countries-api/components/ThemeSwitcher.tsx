import React, { useRef } from 'react';
import { useTheme } from 'next-themes';
import { motion, useAnimationControls, Variant  } from 'framer-motion';

interface Props {}

const ThemeSwitcher: React.FC<Props> = ({}) => {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    React.useEffect(() => {
        setMounted(true)
    }, []);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    if (!mounted) return null;

    return (
        <div>
            <button onClick={changeTheme} className='w-5 border border-neutral-dark-blue dark:border-neutral-very-light-gray rounded-full relative h-3'>
                <span
                    className={`absolute top-[-7px] transition-all duration-300 ease-in ${theme == 'light' ? 'left-[-7px]' : 'right-[-10px]'}`}
                >
                    {theme === 'light' ? '🌛' : '🌞'}
                </span>
            </button>
        </div>
    );
};
export default ThemeSwitcher;
