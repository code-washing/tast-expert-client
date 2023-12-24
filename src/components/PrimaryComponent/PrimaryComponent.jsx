import PropTypes from "prop-types";

const PrimaryComponent = ({ children }) => {
  return (
    <div className="font-default min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden">
      {children}
    </div>
  );
};

PrimaryComponent.propTypes = {
  children: PropTypes.any,
};

export default PrimaryComponent;
