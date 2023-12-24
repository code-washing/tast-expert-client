// react imports
import PropTypes from "prop-types";

// react router dom imports
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// component
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

// custom hooks
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  // extract the user state from context
  const { profileData, appLoading } = useAuth();

  // find out which route the user was originally going to
  const { pathname } = useLocation();

  if (appLoading) {
    return <LoadingSpinner fullscreen={true} />;
  }

  if (!appLoading) {
    // if user is present then give permission to go to selected page
    if (profileData) {
      return children;
    }
    return <Navigate state={pathname} to="/auth/login"></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
