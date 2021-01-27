import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from 'use-dark-mode';
const ThemeToggle = () => {

  // const [theme, setTheme] = useRecoilState(themeState);
  // const { theme, setTheme } = useContext(ThemeContext);
  const theme = 'light'
  
  const iconSize = "28";
  const darkMode = useDarkMode(false);
  const icon =
    darkMode.value === false ? <FiMoon size={iconSize} /> : <FiSun size={iconSize} />;

  return (
    <div
      className="cursor-pointer fixed right-4 top-4"
      onClick={() => darkMode.toggle()}
    >
      {" "}
      { icon }

     </div>
  );
};

export default ThemeToggle;
