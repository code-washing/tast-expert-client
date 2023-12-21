// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

const BrandLogo = ({
  imageSource,
  modifyClasses = "",
  imageModifyClasses = "",
}) => {
  return (
    <div className={`w-max ${modifyClasses}`}>
      <Link className="block w-full h-full" to="/">
        <img
          className={`block h-9 ${imageModifyClasses}`}
          src={imageSource}
          alt="Brand Logo"
        />
      </Link>
    </div>
  );
};

BrandLogo.propTypes = {
  modifyClasses: PropTypes.string,
  imageSource: PropTypes.string,
  imageModifyClasses: PropTypes.string,
};

export default BrandLogo;
