// react imports
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

// component
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// react router import
import { Link } from "react-router-dom";

//  react icon import
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ profile, logoutFunction }) => {
  // hover state
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const infoRef = useRef(null);

  // function to control info panel
  const handleShowInfoPanel = () => {
    setShowInfoPanel((prev) => {
      return !prev;
    });
  };

  // closing the profile div when clicked outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".custom-focus")) {
        setShowInfoPanel(false);
      }
    };

    let timer;
    if (showInfoPanel) {
      timer = setTimeout(() => {
        window.addEventListener("click", handleClickOutside);
        clearTimeout(timer);
      }, 300);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showInfoPanel]);

  // declare name and photo variables
  let name, image;

  if (profile) {
    // assign name and photo variables
    name = profile.name;
    image = profile.imageSource;

    return (
      <div className="w-[2.5rem] cursor-pointer relative">
        {/* profile image container div */}
        <div
          onClick={handleShowInfoPanel}
          className="w-full h-full aspect-square border border-[#ddd]  rounded-full overflow-hidden"
        >
          {/* if no photo provided show default silhoutte photo */}
          {!image && (
            <FaUserCircle className="w-full h-full object-contain text-white"></FaUserCircle>
          )}

          {/* if there is photo show this part */}
          {image !== null && (
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="user image"
            />
          )}
        </div>

        {/* positioned div for display name */}
        <div
          ref={infoRef}
          className={`custom-focus rounded-defaultLg w-max bg-white border border-[#e5e5e5] shadow-xl p-4 absolute top-0 right-0 -translate-x-[1.5rem] translate-y-[2rem] transition-all duration-150 space-y-5 text-left cursor-default ${
            showInfoPanel ? "opacity-100 visible" : "opacity-0 collapse"
          }`}
        >
          <p>{name}</p>
          <Link
            to="/"
            className="block hover:text-primary transition-all duration-200"
          >
            Home
          </Link>
          <ButtonBtn
            onClickFunction={logoutFunction}
            text="Sign Out"
            modifyClasses="!p-0 bg-transparent !text-textPrimary border-0 hover:bg-transparent !text-base !text-left !w-full hover:!text-primary font-bold"
          />
        </div>
      </div>
    );
  }
};

UserProfile.propTypes = {
  profile: PropTypes.object,
  logoutFunction: PropTypes.func,
  justImage: PropTypes.bool,
};

export default UserProfile;
