import { useState } from "react";
import { TabOption } from "./interface/interface";
import Header from "./components/Header";
import { useDarkMode } from "./context/DarkModeContext";
import Projects from "./components/Projects";
import DarkModeOverlay from "./components/DarkModeOverlay";

const App: React.FC = () => {
  const [tab, setTab] = useState<TabOption>(TabOption.WorkExperience);
  const { darkMode } = useDarkMode();

  return (
    <div className="flex flex-wrap items-center justify-center h-screen bg-white">
      {darkMode && <DarkModeOverlay />}

      <div className="flex flex-wrap items-center justify-center">
        <Header setTab={setTab} />
        <div className="flex gap-[55px] overflow-visible px-8">
          <div className="w-0.5 bg-gray-100" />
          <div className="flex flex-row">
            {tab === TabOption.WorkExperience && <Projects />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
