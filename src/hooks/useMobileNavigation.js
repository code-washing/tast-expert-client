// react
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "../features/mobileNav/mobileNavSlice";

const useMobileNavigation = () => {
  const mobileNavOpen = useSelector((store) => store.mobileNav.mobileNavOpen);
  const dispatch = useDispatch();

  const openMobileNav = () => {
    dispatch(openNav());
  };
  const closeMobileNav = () => {
    dispatch(closeNav());
  };

  return { mobileNavOpen, openMobileNav, closeMobileNav };
};

export default useMobileNavigation;
