// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAuth from "./useAuth";
// import useLoginRegistrationProvider from "./useLoginRegistrationProvider";
import useAxios from "./useAxios";
import useToast from "./useToast";

const useLoginForm = () => {
  // extract functions from auth context
  const {
    dispatch,
    loginEmail,
    setAppLoading,
    loginGoogle,
    setUserShouldExist,
    setProfileData,
    loginErrors,
    setLoginErrors,
  } = useAuth();

  // react toastify
  const { showToast } = useToast();

  // axios
  const { axiosCustom } = useAxios();

  // // extract different login and registration related states from this hook
  // const { loginInfo, setLoginInfo } = useLoginRegistrationProvider();

  // create the navigation function
  const navigate = useNavigate();

  // extract state value from use location hook
  const { state } = useLocation();

  const validateInputs = (inputs) => {
    const { email, password } = inputs;
    const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

    const foundErrors = [];

    if (email === "") {
      foundErrors.push("Must provide an email address");
    } else if (!emailRegex.test(email)) {
      foundErrors.push("Must provide a valid email address");
    }

    if (password === "") {
      foundErrors.push("Must provide a password");
    }

    return foundErrors;
  };

  // handle google sign in
  const handleLoginGoogle = async () => {
    const result = await loginGoogle();

    // if google login is succesful send the google user object to the database to check role and existence and also to make a jwt token
    if (result.user) {
      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL,
      };

      // check with database if the google user already exists
      const googleLoginResponse = await axiosCustom.post(
        "/google-login",
        googleUser
      );

      if (googleLoginResponse.data.success) {
        // set profile data, user should exist and the jwt token
        dispatch(setProfileData(googleLoginResponse.data.user));
        dispatch(setUserShouldExist(true));
        localStorage.setItem("token", googleLoginResponse.data.token);

        // send them where they were previously going
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
        showToast("Logged In Successfully", "success");
        dispatch(setAppLoading(false));
      }
    }
  };

  // handle normal login
  const handleLoginEmail = async (e) => {
    e.preventDefault();
    // reset errors
    dispatch(setLoginErrors([]));

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const dataObject = {
      email,
      password,
    };

    const foundErrors = validateInputs(dataObject);

    // if there are erros return from here
    if (foundErrors.length > 0) {
      dispatch(setLoginErrors(foundErrors));
      return;
    }

    try {
      // firebase login api call
      const result = await loginEmail(dataObject.email, dataObject.password);

      //  if firebase login is successful, check database for profile data
      if (result.user) {
        const loginResponse = await axiosCustom.post("/login", {
          email: result.user.email,
        });

        if (loginResponse.data.success) {
          dispatch(setProfileData(loginResponse.data.user));
          dispatch(setUserShouldExist(true));
          // set profile and the jwt token in the localstorage
          localStorage.setItem("token", loginResponse.data.token);

          // send them where they were previously going
          if (state) {
            navigate(state);
          } else {
            navigate("/");
          }
          showToast("Logged In Successfully", "success");
          dispatch(setAppLoading(false));
        }
      }
    } catch (error) {
      dispatch(setLoginErrors(["Email/Password doesn't match. Try again."]));
      dispatch(setAppLoading(false));
    }
  };

  return {
    dispatch,
    loginErrors,
    setLoginErrors,
    handleLoginEmail,
    handleLoginGoogle,
  };
};

export default useLoginForm;
