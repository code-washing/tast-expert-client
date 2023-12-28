import PropTypes from "prop-types";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// components
import BackdropBlur from "../shared/BackdropBlur/BackdropBlur";

// redux
import { useSelector } from "react-redux";

const PrimaryComponent = ({ children }) => {
  const { open } = useSelector((store) => store.backdrop);

  return (
    <div className="font-default min-h-screen flex flex-col max-w-[120rem] mx-auto overflow-x-hidden">
      {/* react toastify */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Slide}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* blur overlay in the page */}
      <BackdropBlur openState={open} />

      {children}
    </div>
  );
};

PrimaryComponent.propTypes = {
  children: PropTypes.any,
};

export default PrimaryComponent;
