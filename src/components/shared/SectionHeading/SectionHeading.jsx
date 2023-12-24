import PropTypes from "prop-types";

const SectionHeading = ({ text, modifyClasses = "" }) => {
  return (
    <h2
      className={`font-semibold text-2xl mb-elementGapSm capitalize ${modifyClasses}`}
    >
      {text}
    </h2>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default SectionHeading;
