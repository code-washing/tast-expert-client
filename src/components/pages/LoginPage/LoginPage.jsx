// react
import { useEffect } from "react";

// components
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import LoginFormWithImage from "./LoginFormWithImage/LoginFormWithImage";

// hooks
import useAuth from "../../../hooks/useAuth";
// import useLoginRegistrationProvider from "../../../../hooks/useLoginRegistrationProvider";

// data
import { authImage } from "./../../../uiData/authUiContent";

const LoginPage = () => {
  const { appLoading, dispatch, setLoginErrors } = useAuth();
  // const { setLoginInfo } = useLoginRegistrationProvider();

  useEffect(() => {
    return () => {
      dispatch(setLoginErrors([]));
    };
  }, [setLoginErrors, dispatch]);

  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapSm md:py-sectionGapMd lg:py-sectionGapSm">
      <InnerContainer>
        <div>
          <SectionHeading
            modifyClasses="mb-elementGapMd text-center"
            text="Welcome Back"
          />

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
