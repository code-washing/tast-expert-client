// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// redux-toolkit
import { store } from "./app/store";
import { Provider } from "react-redux";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// app
import App from "./components/App";

// style import
import "./index.css";

// react query client init
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
