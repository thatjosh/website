import Glitch from "./Glitch";
import { WORK_EXPERIENCE_CONTENT } from "../interface/constants";
import FadeInFromBottom from "./FadeIn";

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      {WORK_EXPERIENCE_CONTENT.map((item, index) => (
        <div key={index} className="flex flex-row">
          <FadeInFromBottom delay={2000 + index * 800} duration={2000}>
            <div className="h-4 w-4 absolute -ml-40">
              <div className="h-10 w-10 mt-2 bg-gray-300" />
            </div>
            <div className="h-4 w-4 absolute -ml-16">
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
            </div>
            <div className="max-w-lg">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-2xl font-serif mb-1">
                <Glitch
                  content={`${item.title}, ${item.company}`}
                  revealSpeed={50}
                  glitchTime={2000}
                />
              </h2>
              <p className="text-md italic text-gray-600">
                <Glitch
                  content={item.location}
                  revealSpeed={50}
                  glitchTime={2000}
                />
              </p>
              <p className="text-md text-gray-700 mt-2">
                <Glitch
                  content={item.description}
                  revealSpeed={5}
                  glitchTime={2000}
                />
              </p>
            </div>
          </FadeInFromBottom>
        </div>
      ))}
    </div>
  );
};
export default Projects;
