// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react router import
import { RouterProvider } from "react-router-dom";

// router import
import router from "./router/router";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux-toolkit
import { store } from "./app/store";
import { Provider } from "react-redux";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// primary Component
import PrimaryComponent from "./components/PrimaryComponent/PrimaryComponent";

// style import
import "./index.css";

// react query client init
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* main app div*/}
        <PrimaryComponent>
          <RouterProvider router={router}></RouterProvider>
        </PrimaryComponent>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
