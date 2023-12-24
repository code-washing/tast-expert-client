// react-router imports
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      {/* page content */}
      <Outlet />
    </div>
  );
}

export default AuthLayout;
