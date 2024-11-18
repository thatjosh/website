import Light from "../assets/light.svg?react";
import Dark from "../assets/dark.svg?react";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      <div className={"flex flex-row gap-1"}>
        {darkMode ? "Dark" : "Light"}
        <div className="w-1 h-1">
          {darkMode && <Light className="h-6 w-6" />}
          {!darkMode && <Dark className="h-6 w-6" />}
        </div>
      </div>
    </button>
  );
};

export default DarkModeButton;
