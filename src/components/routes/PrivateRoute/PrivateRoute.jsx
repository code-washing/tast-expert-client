// react imports
import PropTypes from "prop-types";

// react router dom imports
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { profileData, appLoading } = useSelector(store => store.auth);

  // find out which route the user was originally going to
  const { pathname } = useLocation();

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
