// react
import PropTypes from "prop-types";

// react router
import { NavLink } from "react-router-dom";

// react hashed link
import { HashLink } from "react-router-hash-link";

// shared components
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import BrandLogo from "../BrandLogo/BrandLogo";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";

// hook
import useMobileNavigation from "../../../hooks/useMobileNavigation";

// must import data here to make this component work
import { navOptions } from "../../../uiData/navigationOptions";
// white logo import
import logoWhite from "./../../../assets/websiteLogo/logo-white.webp";

const MobileNav = ({ modifyClasses = "" }) => {
  // extract mobile nav functionality
  const { mobileNavOpen, openMobileNav, closeMobileNav } =
    useMobileNavigation();

  // one single place for the link classes
  const linkClasses =
    "leading-[normal] px-2 py-1 rounded-default border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200";

  return (
    //  mobile nav starts here
    <div>
      <MobileMenuBtn openNavFunction={openMobileNav} />
      <nav
        className={`block h-screen fixed top-0 right-0 w-full lg:w-[35%] translate-x-full origin-center transition-all duration-default z-40 ${
          mobileNavOpen ? "!translate-x-0" : ""
        } text-center p-8 bg-gradient-to-br from-primaryDark to bg-primary ${modifyClasses}`}
      >
        {/* X cross button to close nav */}
        <MobileMenuCloseBtn clickHandler={closeMobileNav} />

        {/* brand logo part */}
        <BrandLogo
          imageSource={logoWhite}
          modifyClasses="block w-max mx-auto mb-4"
        />

        {/* banner h1 text goes here
      <p className="text-2xl md:text-3xl font-bold text-white mb-10">
        {homeTopBannerTextContent.heading}
      </p> */}

        {/* regular part */}
        <ul className="flex flex-col gap-3 mb-14">
          {/* this part will be always shown */}
          {navOptions &&
            navOptions.map((option) => {
              // if hashed link present then return this part, if not then return the next part

              // hashed link
              if (option.hashed) {
                return (
                  <li key={option.id} onClick={closeMobileNav}>
                    <HashLink className={linkClasses} to={option.url}>
                      {option.text}
                    </HashLink>
                  </li>
                );
              }

              // normal link
              return (
                <li key={option.id} onClick={closeMobileNav}>
                  <NavLink className={linkClasses} to={option.url}>
                    {option.text}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

MobileNav.propTypes = {
  modifyClasses: PropTypes.string,
};

export default MobileNav;
