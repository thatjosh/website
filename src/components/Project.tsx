import Glitch from "./Glitch";
import {
  DELAY_FOR_CONTENT_SECTION,
  PROJECT_CONTENT,
} from "../content/Constants";
import FadeInFromBottom from "./FadeIn";
import { RevealSpeed } from "../content/Interface";

const Project: React.FC = () => {
  return (
    <div className="space-y-12">
      {PROJECT_CONTENT.map((item, index) => (
        <div key={index} className="flex flex-row">
          <FadeInFromBottom
            delay={DELAY_FOR_CONTENT_SECTION + index * 800}
            duration={DELAY_FOR_CONTENT_SECTION}
          >
            <div className="mt-4 h-4 w-4 absolute -ml-8 lg:-ml-16 mb-1">
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
            </div>
            <div className="max-w-fit sm:max-w-lg">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-2xl font-serif">
                <Glitch
                  content={`${item.title}`}
                  revealSpeed={RevealSpeed.Moderate}
                  glitchTime={DELAY_FOR_CONTENT_SECTION}
                />
              </h2>

              <div className="flex flex-row flex-wrap">
                <p className="text-md italic text-gray-600">
                  <Glitch
                    content={item.tags.join(" | ")}
                    revealSpeed={RevealSpeed.Moderate}
                    glitchTime={DELAY_FOR_CONTENT_SECTION}
                  />
                </p>
              </div>

              <p className="text-md text-gray-700 mt-2">
                <Glitch
                  content={item.description}
                  revealSpeed={RevealSpeed.VeryFast}
                  glitchTime={DELAY_FOR_CONTENT_SECTION}
                />
              </p>

              <div>
                <button
                  className="hover:scale-105 duration-300 mt-2"
                  onClick={() => window.open(item.link)}
                >
                  <div className="font-serif text-black ">
                    <Glitch
                      content={"Explore"}
                      revealSpeed={RevealSpeed.Slow}
                      glitchTime={DELAY_FOR_CONTENT_SECTION}
                    />
                    <div className="max-w-lg bg-black h-[1px]"></div>
                  </div>
                </button>
              </div>
            </div>
          </FadeInFromBottom>
        </div>
      ))}
    </div>
  );
};
export default Project;
