'use client'
import useTheme from '@/hooks/useTheme';
import React from 'react'
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggler = () => {
    const {handleToggleTheme,theme} = useTheme()


    return (
        <div
            className='fixed right-4 bottom-2 bg-cyan-950 w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded-md'
            onClick={handleToggleTheme}
        >
            <button>
            {theme === 'dark' ? (
                <IoSunny className='text-2xl text-white' />
            ) : (
                <IoMoon className='text-2xl text-white' />
            )}
            </button>
        </div>
    );
}

export default ThemeToggler;
