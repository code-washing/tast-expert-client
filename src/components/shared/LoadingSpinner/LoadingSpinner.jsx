// react
import PropTypes from "prop-types";

// react icons
import { ImSpinner8 } from "react-icons/im";

const LoadingSpinner = ({
  text = "Loading",
  modifyClasses = "",
  modifyInnerContainerClasses = "",
  onlyLoader = false,
}) => {
  return (
    <div className={`${modifyClasses}`}>
      <div
        className={`flex flex-col md:flex-row justify-center items-center gap-3 ${modifyInnerContainerClasses}`}
      >
        {/* text */}
        {!onlyLoader && (
          <div style={{ fontSize: "inherit", color: "inherit" }}>{text}</div>
        )}

        {/* loading spinner */}
        <ImSpinner8
          style={{ fontSize: "inherit", color: "inherit" }}
          className="text-primaryLight animate-spin font-bold"
        />
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  onlyLoader: PropTypes.bool,
  modifyInnerContainerClasses: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default LoadingSpinner;
