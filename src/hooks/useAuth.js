// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// auth actions
import { authActions } from "../features/auth/authSlice";

// axios
import axios from "axios";

// firebase imports
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// create auth instance
const auth = getAuth(app);

// create google provider instance
const googleProvider = new GoogleAuthProvider();

// hooks
import useToast from "./useToast";

const useAuth = () => {
  // declare dispatch function
  const dispatch = useDispatch();
  // take states from redux store
  const {
    userShouldExist,
    userAlreadyRegistered,
    profileData,
    user,
    appLoading,
  } = useSelector((store) => store.auth);

  // take auth actions
  const {
    setUserShouldExist,
    setUserAlreadyRegistered,
    setProfileData,
    setUser,
    setAppLoading,
  } = authActions;

  // showToast method
  const { showToast } = useToast();

  // if there is a jwt token in localstorage then user should exist
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setUserShouldExist(true));
    }
  }, [dispatch, setUserShouldExist]);

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (curUser) => {
      if (curUser) {
        dispatch(setUser(curUser));

        // this code should only run when the website is refreshed
        if (!profileData && userShouldExist) {
          // check which firebase user is logged in, send the email to database and bring their profile data
          const userCheckResponse = await axios.post("/login", {
            email: curUser.email,
          });

          dispatch(setProfileData(userCheckResponse.data.user));
          dispatch(setAppLoading(false));
        }
      } else {
        dispatch(setUser(null));
        dispatch(setAppLoading(false));
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, [
    dispatch,
    userShouldExist,
    profileData,
    setAppLoading,
    setProfileData,
    setUser,
  ]);

  // login with google function
  const loginGoogle = () => {
    dispatch(setAppLoading(true));
    return signInWithPopup(auth, googleProvider);
  };

  // user creation with email and password
  const signup = (email, password) => {
    dispatch(setAppLoading(true));
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const loginEmail = (email, password) => {
    dispatch(setAppLoading(true));
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update function
  const updateUserProfile = (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  // user logout function
  const logout = () => {
    dispatch(setAppLoading(true));
    signOut(auth)
      .then(() => {
        dispatch(setProfileData(null));
        dispatch(setUserShouldExist(false));
        dispatch(setUser(null));
        localStorage.removeItem("token");
        dispatch(setAppLoading(false));
        showToast("Logged Out Successfully", "success");
      })
      .catch((error) => console.error(error));
  };

  return {
    // auth slice methods
    // you have to call all the set methods inside dispatch method
    dispatch,
    setUserShouldExist,
    setUserAlreadyRegistered,
    setProfileData,
    setUser,
    setAppLoading,
    // auth properties
    userShouldExist,
    userAlreadyRegistered,
    profileData,
    user,
    appLoading,
    // firebase auth related functions
    signup,
    loginGoogle,
    loginEmail,
    updateUserProfile,
    logout,
  };
};

export default useAuth;
