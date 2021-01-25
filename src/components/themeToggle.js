import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Toggle from "react-toggle";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
          <div className='cursor-pointer fixed right-4 top-4' onClick={e => toggleTheme(theme === 'light' ? "dark" : "light")}>
              { theme === 'light' ? <FiMoon className='w-6 h-6'/> : <FiSun  className='w-6 h-6'/>}
          </div>
      )}
    </ThemeToggler>
  );
}
