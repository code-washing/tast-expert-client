// react imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import RegistrationFormWithImage from "./RegistrationFormWithImage/RegistrationFormWithImage";

// hook
import useRedirectDashboard from "../../../hooks/useRedirectDashboard";

// data
import { authImage } from "../../../uiData/authUiContent";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setRegistrationErrors } from "../../../features/auth/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { appLoading, profileData } = useSelector(store => store.auth);
  const { state } = useLocation();

  //if user profile already exists then redirect to dashboard
  useRedirectDashboard(profileData, state);
  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      dispatch(setRegistrationErrors([]));
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapSm md:py-sectionGapMd lg:py-sectionGapSm">
      <div>
        <div>
          <RegistrationFormWithImage
            imageSource={authImage}
            appLoading={appLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
