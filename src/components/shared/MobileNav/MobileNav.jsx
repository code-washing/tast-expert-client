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
import BackdropBlur from "../BackdropBlur/BackdropBlur";

// hook
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useEscapeClose from "../../../hooks/useEscapeClose";

// must import data here to make this component work
import { navOptions } from "../../../uiData/navigationOptions";
// white logo import
import logoWhite from "./../../../assets/websiteLogo/logo-white.webp";

const MobileNav = ({ modifyClasses = "" }) => {
  // extract mobile nav functionality
  const { mobileNavOpen, openMobileNav, closeMobileNav } =
    useMobileNavigation();

  useEscapeClose(closeMobileNav);

  // one single place for the link classes
  const linkClasses =
    "leading-[normal] px-2 py-1 rounded-default text-white hover:text-primaryLightest font-medium transition-all duration-200";

  return (
    //  mobile nav starts here
    <div className="z-30">
      <MobileMenuBtn openNavFunction={openMobileNav} />
      <BackdropBlur clickHandler={closeMobileNav} openState={mobileNavOpen} />

      <nav
        className={`block h-screen fixed top-0 right-0 w-full lg:w-[35%] translate-x-full origin-center transition-all duration-default z-40 ${
          mobileNavOpen ? "!translate-x-0" : ""
        } p-8 bg-gradient-to-br from-primaryDark to bg-primary ${modifyClasses}`}
      >
        {/* X cross button to close nav */}
        <MobileMenuCloseBtn clickHandler={closeMobileNav} />

        {/* brand logo part */}
        <BrandLogo
          imageSource={logoWhite}
          modifyClasses="block w-max mr-auto mb-10"
        />

        {/* regular part */}
        <ul className="flex flex-col gap-3">
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
