import { useDarkMode } from "../context/DarkModeContext";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>{darkMode ? "Dark" : "Light"}</button>
  );
};

export default DarkModeButton;
