// react
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import LoginFormWithImage from "./LoginFormWithImage/LoginFormWithImage";

// hooks
import useAuth from "../../../hooks/useAuth";
import useRedirectDashboard from "../../../hooks/useRedirectDashboard";

// data
import { authImage } from "./../../../uiData/authUiContent";

const LoginPage = () => {
  const { appLoading, dispatch, setLoginErrors, profileData } = useAuth();
  const { state } = useLocation();
  useRedirectDashboard(profileData, state);

  useEffect(() => {
    return () => {
      dispatch(setLoginErrors([]));
    };
  }, [setLoginErrors, dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapSm md:py-sectionGapMd lg:py-sectionGapSm">
      <InnerContainer>
        <div>
          <div>
            <LoginFormWithImage
              imageSource={authImage}
              appLoading={appLoading}
            />
          </div>
        </div>
      </InnerContainer>
    </div>
  );
};

export default LoginPage;
