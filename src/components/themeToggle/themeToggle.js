import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { themeState } from "./themeState";

const ThemeToggle = () => {

  const [theme, setTheme] = useRecoilState(themeState);
  
  const iconSize = "28";

  const icon =
    theme === "light" ? <FiMoon size={iconSize} /> : <FiSun size={iconSize} />;

  return (
    <div
      className="cursor-pointer fixed right-4 top-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {" "}
      { icon }{" "}
    </div>
  );
};

export default ThemeToggle;
