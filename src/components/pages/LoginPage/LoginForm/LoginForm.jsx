// react imports
import { useState } from "react";
import PropTypes from "prop-types";

// react router import
import { Link } from "react-router-dom";

// component
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import GoogleLoginBtn from "../../../shared/GoogleLoginBtn/GoogleLoginBtn";

// hooks
import useLoginForm from "../../../../hooks/useLoginForm";

// react icons
import { IoEye, IoEyeOff } from "react-icons/io5";

// redux
import { useSelector } from "react-redux";

const LoginForm = ({ modifyClasses }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginErrors } = useSelector(store => store.auth);
  const { handleLoginEmail, handleLoginGoogle } = useLoginForm();

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  return (
    <div
      className={`w-full mx-auto py-12 px-5 xsm:px-8 sm:px-10 2md:px-12 lg:px-10 ${modifyClasses}`}>
      {/* heading */}
      <h2 className="capitalize mb-elementGapSm text-center text-2xl">
        Login to your account
      </h2>

      {/* form */}
      <form noValidate onSubmit={handleLoginEmail} className="w-full">
        {/* email field */}
        <div className="mb-4">
          <input
            className={inputClasses}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        {/* password field */}
        <div className="relative">
          <input
            className={inputClasses}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
          />

          {/* show/no show password buttons */}
          <button
            aria-label="Show or not show password button"
            type="button"
            className="block w-max absolute top-1/2 -translate-y-1/2 right-3 text-textPrimary"
            onClick={e => {
              e.preventDefault();
              setShowPassword(prev => !prev);
            }}>
            {showPassword ? (
              <IoEyeOff className="text-xl" />
            ) : (
              <IoEye className="text-xl" />
            )}
          </button>
        </div>

        {loginErrors?.length > 0 && (
          <div className="space-y-1 mt-4">
            {loginErrors.map(error => {
              return (
                <p
                  key={error}
                  className="text-sm text-center font-semibold text-red-600">
                  * {error}
                </p>
              );
            })}
          </div>
        )}

        <ButtonBtn text="Sign In" modifyClasses="mx-auto block mt-10 mb-4" />
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary font-semibold" to={"/auth/register"}>
            Register
          </Link>
        </p>
      </form>

      <p className="text-center my-5">Or</p>

      <GoogleLoginBtn
        onClickFunction={handleLoginGoogle}
        modifyClasses="w-max mx-auto mb-7"
      />

      <Link to="/" className="block text-primary text-center hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

LoginForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default LoginForm;
