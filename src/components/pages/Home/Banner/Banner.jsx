// components
import BannerText from "../../../shared/BannerText/BannerText";
import Video from "./../../../shared/Video/Video";

// data
import { homeTopBannerTextContent } from "../../../../uiData/homeUiContent";
import bannerVideo from "./../../../../assets/video/banner-video.mp4";

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
        <div className="w-full h-full shadow-medium">
          <Video videoSource={bannerVideo} soundBtn={false} />
        </div>
      </div>
    </div>
  );
};

export default BannerAndCarousel;
