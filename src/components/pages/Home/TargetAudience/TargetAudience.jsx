// imports
import SectionHeading from "./../../../shared/SectionHeading/SectionHeading";
import PhotoGallery2 from "../../../shared/PhotoGallery2/PhotoGallery2";

// data
import { targetAudienceTextContent } from "../../../../uiData/homeUiContent";

const TargetAudience = () => {
  const { images, heading, subheading, description } =
    targetAudienceTextContent;

  return (
    <div>
      {/* heading */}
      <SectionHeading
        text={heading}
        modifyClasses="text-center text-5xl !font-extrabold mb-elementGapMd"
      />

      <PhotoGallery2 imagesData={images} modifyClasses="mb-elementGapMd" />

      {/* subheading */}
      <p className="font-semibold text-2xl text-center mb-elementGapSm text-primaryDark">
        {subheading}
      </p>
      {/* description */}
      <p className="w-full md:w-[80%] lg:w-[70%] font-medium mx-auto text-center leading-[1.6]">
        {description}
      </p>
    </div>
  );
};

export default TargetAudience;
