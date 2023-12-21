// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

const Brandlogo = ({ logo, modifyClasses = "", imageModifyClasses = "" }) => {
  return (
    <div className={`w-max ${modifyClasses}`}>
      <Link className="block w-full h-full" to="/">
        <img
          className={`block h-9 ${imageModifyClasses}`}
          src={logo}
          alt="Brand Logo"
        />
      </Link>
    </div>
  );
};

Brandlogo.propTypes = {
  modifyClasses: PropTypes.string,
  logo: PropTypes.string,
  imageModifyClasses: PropTypes.string,
};

export default Brandlogo;
