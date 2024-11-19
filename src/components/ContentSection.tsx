import { TabOption } from "../content/Interface";
import Experience from "./Experience";
import Project from "./Project";

interface ContentSectionProps {
  tab: TabOption;
}

const ContentSection: React.FC<ContentSectionProps> = ({ tab }) => {
  return (
    <div className="flex gap-[22.5px] lg:gap-[55px] px-8">
      <div className="mt-8 w-0.5 bg-gray-200" />
      {tab === TabOption.WorkExperience && <Experience />}
      {tab === TabOption.Projects && <Project />}
    </div>
  );
};

export default ContentSection;
