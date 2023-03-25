import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flow-row flex-wrap justify-center gap-10">
      {technologies.map((technologie) => (
        <div className="w-28 h-28" key={technologie.name}>
          {/* 3D模型,小球 */}
          <BallCanvas icon={technologie.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
