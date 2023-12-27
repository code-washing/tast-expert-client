// react
import PropTypes from "prop-types";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import BrandLogo from "../BrandLogo/BrandLogo";
import ListOfLinks from "../ListOfLinks/ListOfLinks";

// react icons
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

// data
import logoWhite from "./../../../assets/websiteLogo/logo-white.webp";
import { footerOptions, currentYear } from "../../../uiData/footerData";

const Footer = () => {
  const socialLinksClasses =
    "text-4xl text-white hover:text-primary transition-all duration-150 cursor-pointer";

  return (
    <footer className="bg-gradient-to-r from-black to-black pt-sectionGapMd pb-sectionGapSm relative">
      <InnerContainer>
        {/* top part */}

        {/* address and links */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-3">
          {/* website logo */}
          <BrandLogo
            imageSource={logoWhite}
            modifyClasses="mx-auto mb-sectionGapSm"
            imageModifyClasses="lg:h-[3rem]"
          />

          {/* list of links */}
          <div className="justify-self-center mb-14 text-center md:text-left">
            <ListOfLinks linksData={footerOptions} />
          </div>

          {/* follow us social media */}
          <div className="justify-self-center">
            {/* social media icons */}
            <div className={``}>
              <h2 className="text-xl text-center md:text-left text-white mb-3 2xl:text-3xl font">
                Follow Us
              </h2>

              {/* social media icons */}
              <div className="text-white text-2xl flex items-center gap-4">
                <a
                  className={socialLinksClasses}
                  href="https://www.facebook.com"
                >
                  <FaFacebook />
                </a>
                <a
                  className={socialLinksClasses}
                  href="https://www.twitter.com"
                >
                  <FaXTwitter />
                </a>
                <a
                  className={socialLinksClasses}
                  href="https://www.instagram.com"
                >
                  <FaInstagram />
                </a>
                <a
                  className={socialLinksClasses}
                  href="https://www.youtube.com"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* copyright part */}
        <div className="text-center">
          <small className="text-white 2xl:text-lg">
            &copy; {currentYear} Task Expert Inc., developed by Nashiuz Zaman
          </small>
        </div>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  addressData: PropTypes.object,
};

export default Footer;
