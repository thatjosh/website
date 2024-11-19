import Glitch from "./Glitch";
import { RevealSpeed, TabOption } from "../content/Interface";
import DarkModeButton from "./DarkModeButton";
import FadeInFromBottom from "./FadeIn";
import {
  HEADER_FADE_TIME,
  HEADER_SUBHEADING_GLITCH_TIME,
  HEADER_TEXT_GLITCH_TIME,
  TITLE_GLITCH_TIME,
} from "../content/Constants";

interface HeaderProps {
  tab: TabOption;
  toggleTab: (tab: TabOption) => void;
}
const Header: React.FC<HeaderProps> = ({ tab, toggleTab }) => {
  return (
    <div className="flex sm:min-w-[620px] p-8">
      <div className="text-left">
        <h1 className="text-5xl font-serif">
          <Glitch
            content={"Joshua Ang"}
            revealSpeed={RevealSpeed.ModeratelySlow}
            glitchTime={TITLE_GLITCH_TIME}
          />
        </h1>
        <p className="text-black mt-2 text-nowrap">
          <Glitch
            content={"Fullstack · Machine Learning · Statistics"}
            revealSpeed={RevealSpeed.Fast}
            glitchTime={HEADER_TEXT_GLITCH_TIME}
          />
        </p>
        <FadeInFromBottom delay={HEADER_FADE_TIME}>
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className={`text-sm px-4 py-2 lg:w-40 ${
                tab === TabOption.WorkExperience
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => toggleTab(TabOption.WorkExperience)}
            >
              <Glitch
                content={"Experience"}
                revealSpeed={RevealSpeed.Moderate}
                glitchTime={HEADER_SUBHEADING_GLITCH_TIME}
              />
            </button>
            <button
              className={`text-sm px-4 py-2 lg:w-40 ${
                tab === TabOption.Projects
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => toggleTab(TabOption.Projects)}
            >
              <Glitch
                content={"Projects"}
                revealSpeed={RevealSpeed.Slow}
                glitchTime={HEADER_SUBHEADING_GLITCH_TIME}
              />
            </button>
          </div>
          <div className={`mt-4 lg:mt-4`}>
            <DarkModeButton />
          </div>
        </FadeInFromBottom>
      </div>
    </div>
  );
};

export default Header;
