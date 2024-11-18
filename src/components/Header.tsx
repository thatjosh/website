import Glitch from "./Glitch";
import { TabOption } from "../content/Interface";
import DarkModeButton from "./DarkModeButton";
import FadeInFromBottom from "./FadeIn";

interface HeaderProps {
  tab: TabOption;
  setTab: React.Dispatch<React.SetStateAction<TabOption>>;
}
const Header: React.FC<HeaderProps> = ({ tab, setTab }) => {
  return (
    <div className="flex min-w-[600px] p-8">
      <div className="text-left ml-28">
        <h1 className="text-5xl font-serif">
          <Glitch content={"Joshua Ang"} revealSpeed={100} glitchTime={0} />
        </h1>
        <p className="text-black mt-2">
          <Glitch
            content={"Fullstack · Machine Learning · Statistics"}
            revealSpeed={20}
            glitchTime={1000}
          />
        </p>
        <FadeInFromBottom delay={100}>
          <div className="flex gap-4 mt-4">
            <button
              className={`text-sm px-4 py-2 ${
                tab === TabOption.WorkExperience
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setTab(TabOption.WorkExperience)}
            >
              <Glitch
                content={"Work Experience"}
                revealSpeed={50}
                glitchTime={500}
              />
            </button>
            <button
              className={`text-sm px-4 py-2 ${
                tab === TabOption.Projects
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setTab(TabOption.Projects)}
            >
              <Glitch content={"Projects"} revealSpeed={150} glitchTime={500} />
            </button>
          </div>
          <div className="mt-8">
            <DarkModeButton />
          </div>
        </FadeInFromBottom>
      </div>
    </div>
  );
};

export default Header;
