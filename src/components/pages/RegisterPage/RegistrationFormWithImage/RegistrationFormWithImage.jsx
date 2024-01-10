// react
import PropTypes from "prop-types";

// react-router
import { Link } from "react-router-dom";

// components
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

// hook
import useAuth from "../../../../hooks/useAuth";

const RegistrationFormWithImage = ({ imageSource, appLoading }) => {
  const { userAlreadyRegistered, setUserAlreadyRegistered } = useAuth();

  return (
    <div
      className={`grid grid-cols-1 2md:grid-cols-2 lg:grid-cols-[1.5fr_1fr]  rounded-2xl overflow-hidden mx-auto w-[90%] md:w-[80%] 2md:w-[90%] lg:w-[56rem] 2xl:w-[60rem] shadow-large form-animation min-h-[33rem]`}
    >
      {/* image */}
      <div className="w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt="cover image"
        />
      </div>

      {/* Registration form */}
      <div className="w-full">
        {appLoading && (
          <LoadingSpinner
            modifyClasses="h-full flex justify-center items-enter text-xl"
            text="Registering"
          />
        )}
        {!appLoading && !userAlreadyRegistered && <RegistrationForm />}

        {/* if user exists then show the user exists message */}
        {!appLoading && userAlreadyRegistered && (
          <div className="h-full">
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="mb-4 text-center text-2xl">User already exists</h2>

              {/* if user already registered */}
              <Link to="/auth/login" className="block mx-auto">
                <ButtonBtn
                  onClickFunction={() => {
                    setUserAlreadyRegistered(false);
                  }}
                  text="Log in to your account"
                  modifyClasses="mx-auto"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

RegistrationFormWithImage.propTypes = {
  imageSource: PropTypes.string,
  appLoading: PropTypes.bool,
};

export default RegistrationFormWithImage;
