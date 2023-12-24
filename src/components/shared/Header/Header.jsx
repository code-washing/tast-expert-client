// react
import PropTypes from "prop-types";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import MobileNav from "./../MobileNav/MobileNav";
import UserProfile from "./../UserProfile/UserProfile";
import LinkBtn from "../LinkBtn/LinkBtn";

// hooks
import useAuth from "./../../../hooks/useAuth";

// data
import logoPrimary from "./../../../assets/websiteLogo/logo-primary.webp";

const Header = ({ modifyClasses = "" }) => {
  // extra user from auth
  const { profileData, appLoading, logout } = useAuth();

  return (
    <header className={`py-elementGapMd ${modifyClasses}`}>
      <InnerContainer>
        <div className="grid grid-cols-2 items-center">
          {/* website logo */}
          <div>
            <BrandLogo
              imageSource={logoPrimary}
              imageModifyClasses="h-[3rem]"
            />
          </div>

          {/* auth related options login/logout etc */}
          <div className="flex items-center gap-3 justify-self-end">
            {!appLoading && !profileData && (
              <LinkBtn text="Sign In" url="/auth/login" />
            )}

            {/* if app is finished loading and user is truthy, show the userprofile */}
            {!appLoading && profileData && (
              <UserProfile profile={profileData} logoutFunction={logout} />
            )}

            {/* mobile nav button and mobile nav menu */}
            <MobileNav />
          </div>
        </div>
      </InnerContainer>
    </header>
  );
};

Header.propTypes = {
  modifyClasses: PropTypes.string,
};

export default Header;
