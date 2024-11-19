import { TabOption } from "../content/Interface";
import Experience from "./Experience";
import Project from "./Project";

interface ContentSectionProps {
  tab: TabOption;
  hasMounted: Record<TabOption, boolean>;
}

const ContentSection: React.FC<ContentSectionProps> = ({ tab, hasMounted }) => {
  return (
    <div className="flex gap-[22.5px] lg:gap-[55px] px-8">
      <div className="mt-8 w-0.5 bg-gray-200" />
      <div className={tab === TabOption.WorkExperience ? "block" : "hidden"}>
        <Experience />
      </div>
      {hasMounted.projects && (
        <div className={tab === TabOption.Projects ? "block" : "hidden"}>
          <Project />
        </div>
      )}
    </div>
  );
};

export default ContentSection;
