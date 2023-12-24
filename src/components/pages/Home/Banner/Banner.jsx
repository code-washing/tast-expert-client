// components
import BannerText from "../../../shared/BannerText/BannerText";

// data
import {
  homeTopBannerTextContent,
  homeBannerImage,
} from "../../../../uiData/homeUiContent";

const BannerAndCarousel = () => {
  // extract heading and subheading
  const { heading, subheading } = homeTopBannerTextContent;

  return (
    <div className="grid grid-cols-1 gap-12 sm:gap-[5rem] lg:gap-0 lg:grid-cols-2 items-center">
      {/* banner text part */}
      <div>
        <BannerText heading={heading} subheading={subheading} />
      </div>

      {/* banner image part */}
      <div>
        <div className="w-full h-full shadow-small">
          <img src={homeBannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default BannerAndCarousel;
