// imports
import SectionHeading from "./../../../shared/SectionHeading/SectionHeading";
import PhotoGallery2 from "../../../shared/PhotoGallery2/PhotoGallery2";
import LinkBtn from "./../../../shared/LinkBtn/LinkBtn";

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
      <p className="font-semibold text-3xl text-center mb-4 text-primary">
        {subheading}
      </p>
      {/* description */}
      <p className="w-full md:w-[80%] lg:w-[70%] font-medium mx-auto text-center leading-[1.6] mb-elementGapSm">
        {description}
      </p>

      <LinkBtn
        url="/auth/register"
        text="Sign Up - It's free!"
        modifyClasses="mx-auto"
      />
    </div>
  );
};

export default TargetAudience;
