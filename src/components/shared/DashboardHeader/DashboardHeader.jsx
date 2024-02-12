// react
import PropTypes from "prop-types";

// components
import BrandLogo from "./../BrandLogo/BrandLogo";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import MobileNav from "./../MobileNav/MobileNav";
import UserProfile from "./../UserProfile/UserProfile";

// hooks
import useFirebaseMethods from "../../../hooks/useFirebaseMethods";

// redux
import { useSelector } from "react-redux";

// data
import logoPrimary from "./../../../assets/websiteLogo/logo-primary.webp";

const DashboardHeader = ({ modifyClasses = "" }) => {
  const { profileData, appLoading } = useSelector(store => store.auth);
  const { logout } = useFirebaseMethods();

  return (
    <header
      className={`py-elementGapMd border-b border-lightBorder ${modifyClasses}`}>
      <InnerContainer>
        <div className="grid grid-cols-1 gap-elementGapMd sm:gap-0 sm:grid-cols-2 items-center">
          {/* website logo */}
          <div className="justify-self-center sm:justify-self-start">
            <BrandLogo
              imageSource={logoPrimary}
              imageModifyClasses="h-[3rem]"
            />
          </div>

          {/* auth related options login/logout etc */}
          <div className="flex items-center gap-3 justify-self-center sm:justify-self-end">
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

DashboardHeader.propTypes = {
  modifyClasses: PropTypes.string,
};

export default DashboardHeader;
