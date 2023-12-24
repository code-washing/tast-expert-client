// react-router imports
import { Outlet } from "react-router-dom";

// component
import Header from "../shared/Header/Header";

function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
