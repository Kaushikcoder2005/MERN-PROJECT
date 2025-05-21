// ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <>
            <button onClick={toggleTheme} className='bg-gray-800 p-1 rounded-xl hover:bg-gray-700'>
                {theme === "light"? <FaMoon  className='text-3xl text-white' />:<FaSun  className="text-3xl text-white"/>}
            </button>
        </>

    );
};

export default ThemeToggle;
