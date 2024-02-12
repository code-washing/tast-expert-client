// react router
import { RouterProvider } from "react-router-dom";
import router from "./../router/router";

// components
import BackdropBlur from "./shared/BackdropBlur/BackdropBlur";

// hooks
import useAuth from "../hooks/useAuth";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux
import { useSelector } from "react-redux";

const App = () => {
  useAuth();
  const { open } = useSelector(store => store.backdrop);

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

      {/* main app with the router */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
