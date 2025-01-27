'use client'
import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState<string>('light');
    const [isMounted, setIsMounted] = useState(false);

    // Ensure the component is mounted before accessing browser-specific features
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            setBodyTheme(savedTheme);
        }
        setIsMounted(true); // Mark the component as mounted
    }, []);

    // Function to set the theme class on the body element
    const setBodyTheme = (theme: string) => {
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(theme);
    };

    // Handle theme toggle
    const handleToggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme);
        }
    };

    // Apply the theme to the body whenever it changes
    useEffect(() => {
        if (isMounted) {
            setBodyTheme(theme);
        }
    }, [theme, isMounted]);

    return {
        theme,
        handleToggleTheme,
    };
};

export default useTheme;
