import Glitch from "./Glitch";
import FadeInFromBottom from "./FadeIn";
import { useContext, useEffect, useState } from "react";
import { InitStateContext } from "../context/Initialiser";
import {
  DELAY_FOR_CONTENT_SECTION,
  DELAY_PER_ITEM,
  ON_LOAD_DELAY_FOR_CONTENT_SECTION,
  WORK_EXPERIENCE_CONTENT,
} from "../content/Constants";
import { useDarkMode } from "../context/DarkModeContext";
import { RevealSpeed } from "../content/Interface";

const Experience: React.FC = () => {
  const { hasNotInit, setHasNotInit } = useContext(InitStateContext);
  const [focusElement, setFocusElement] = useState<number | null>(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setTimeout(() => {
      setHasNotInit(false);
    }, ON_LOAD_DELAY_FOR_CONTENT_SECTION);
  }, []);

  const glitchTime = hasNotInit
    ? ON_LOAD_DELAY_FOR_CONTENT_SECTION
    : DELAY_FOR_CONTENT_SECTION;

  return (
    <div className="space-y-8">
      {WORK_EXPERIENCE_CONTENT.map((item, index) => (
        <div
          key={index}
          className="flex flex-row"
          onMouseEnter={() => setFocusElement(item.id)}
          onMouseLeave={() => setFocusElement(null)}
        >
          <FadeInFromBottom
            delay={glitchTime + index * DELAY_PER_ITEM}
            duration={glitchTime}
          >
            {!darkMode && (
              <div
                className={`${
                  focusElement === item.id ? "brightness-100" : "brightness-0"
                } hover:brightness-100 transition-all duration-300 lg:absolute lg:-ml-40 p-2
              }`}
              >
                {item.icon}
              </div>
            )}
            {darkMode && (
              <div className="brightness-0 transition-all duration-300 lg:absolute lg:-ml-40 p-2">
                {item.icon}
              </div>
            )}
            <div className="mt-4 h-4 w-4 absolute -ml-8 lg:-ml-16">
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
            </div>
            <div className="max-w-fit sm:max-w-lg">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-2xl font-serif mb-1">
                <Glitch
                  content={`${item.title}, ${item.company}`}
                  revealSpeed={RevealSpeed.Moderate}
                  glitchTime={glitchTime}
                />
              </h2>
              <p className="text-md italic text-gray-600">
                <Glitch
                  content={item.location}
                  revealSpeed={RevealSpeed.Moderate}
                  glitchTime={glitchTime}
                />
              </p>
              <p className="text-md text-gray-700 mt-2">
                <Glitch
                  content={item.description}
                  revealSpeed={RevealSpeed.VeryFast}
                  glitchTime={glitchTime}
                />
              </p>
            </div>
          </FadeInFromBottom>
        </div>
      ))}
    </div>
  );
};
export default Experience;
