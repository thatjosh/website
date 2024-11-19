import { useState } from "react";
import Header from "./components/Header";
import { useDarkMode } from "./context/DarkModeContext";
import DarkModeOverlay from "./components/DarkModeOverlay";
import { TabOption } from "./content/Interface";
import ContentSection from "./components/ContentSection";

const App: React.FC = () => {
  const [tab, setTab] = useState<TabOption>(TabOption.WorkExperience);
  const { darkMode } = useDarkMode();

  return (
    <div className="flex sm:flex-wrap sm:items-center sm:justify-center h-screen bg-white overflow-auto px-4">
      <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center">
        {darkMode && <DarkModeOverlay />}
        <Header tab={tab} setTab={setTab} />
        <ContentSection tab={tab} />
        <div className="h-28 w-full  xl:hidden" />
      </div>
    </div>
  );
};

export default App;
