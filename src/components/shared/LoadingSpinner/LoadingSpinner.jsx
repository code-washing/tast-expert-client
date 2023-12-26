// react
import PropTypes from "prop-types";

// react icons
import { LiaSpinnerSolid } from "react-icons/lia";

const LoadingSpinner = ({
  text = "Loading",
  fullscreen = false,
  fullHeight = false,
  modifyClasses = "",
  textSizeClasses = null,
  onlyLoader = false,
}) => {
  const textSize = textSizeClasses ?? "text-3xl";

  return (
    <div
      className={`${
        fullscreen ? "min-h-screen" : fullHeight ? "h-full" : "min-h-[30rem]"
      } ${modifyClasses}`}
    >
      <div
        className={`${
          fullscreen ? "min-h-screen" : "h-full"
        }  flex justify-center items-center p-8`}
      >
        <div className="flex items-center gap-3">
          {!onlyLoader && <span className={`block ${textSize}`}>{text}</span>}
          <LiaSpinnerSolid
            className={`text-primaryLight animate-spin ${textSize}`}
          />
        </div>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  text: PropTypes.string,
  onlyLoader: PropTypes.bool,
  textSizeClasses: PropTypes.string,
  modifyClasses: PropTypes.string,
  fullscreen: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

export default LoadingSpinner;
