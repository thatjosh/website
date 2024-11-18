import { useState } from "react";
import Header from "./components/Header";
import { useDarkMode } from "./context/DarkModeContext";
import DarkModeOverlay from "./components/DarkModeOverlay";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { TabOption } from "./content/Interface";
import DarkModeButton from "./components/DarkModeButton";

const App: React.FC = () => {
  const [tab, setTab] = useState<TabOption>(TabOption.WorkExperience);
  const { darkMode } = useDarkMode();

  return (
    <div className="flex sm:flex-wrap sm:items-center sm:justify-center h-screen bg-white overflow-auto">
      <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center bg-white">
        <Header tab={tab} setTab={setTab} />
        <div className="flex gap-[22.5px] lg:gap-[55px] px-8 pb-8">
          {darkMode && <DarkModeOverlay />}
          <div className="mt-8 w-0.5 bg-gray-200" />
          <div className="flex flex-row">
            {tab === TabOption.WorkExperience && <Experience />}
            {tab === TabOption.Projects && <Project />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
