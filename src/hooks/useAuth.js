// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// auth actions
import { authActions } from "../features/auth/authSlice";

// axios
import useAxios from "./useAxios";

// firebase imports
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

// create auth & google provider instance
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// take auth actions
const { setUserShouldExist, setProfileData, setAppLoading } = authActions;

const useAuth = () => {
  // declare dispatch function
  const dispatch = useDispatch();
  // take states from redux store
  const { userShouldExist, profileData } = useSelector(store => store.auth);

  const { axiosCustom } = useAxios();

  // if true, then user should exist
  useEffect(() => {
    if (localStorage.getItem("tokenExists")) {
      dispatch(setUserShouldExist(true));
    }
  }, [dispatch]);

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async curUser => {
      if (curUser) {
        // this code should only run when the website is refreshed
        if (!profileData && userShouldExist) {
          // check which firebase user is logged in, send the email to database and bring their profile data
          const userCheckResponse = await axiosCustom.post("/login", {
            email: curUser.email,
          });

          dispatch(setProfileData(userCheckResponse.data.user));
          dispatch(setAppLoading(false));
        } else {
          dispatch(setAppLoading(false));
        }
      } else {
        dispatch(setAppLoading(false));
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, [dispatch, userShouldExist, profileData, axiosCustom]);
};

export default useAuth;
