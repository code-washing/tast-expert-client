// react imports
import { useEffect } from "react";

// components
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import RegistrationFormWithImage from "./RegistrationFormWithImage/RegistrationFormWithImage";

// hook
import useAuth from "../../../hooks/useAuth";

// data
import { authImage } from "../../../uiData/authUiContent";

const RegisterPage = () => {
  const { appLoading, dispatch, setRegistrationErrors } = useAuth();

  // use the effect's clean up function to empty the registration fields
  useEffect(() => {
    return () => {
      dispatch(setRegistrationErrors([]));
    };
  }, [dispatch, setRegistrationErrors]);

  return (
    <div className="min-h-screen flex justify-center items-center py-sectionGapSm md:py-sectionGapMd lg:py-sectionGapSm">
      <div>
        <SectionHeading
          modifyClasses="mb-elementGapMd text-center"
          text={
            <>
              Sign up on <span className="text-primary">Task Expert</span>
            </>
          }
        />

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
