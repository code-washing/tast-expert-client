// react
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "../features/mobileNav/mobileNavSlice";

// backdrop slice methods
import { setOpen } from "../features/backdrop/backdropSlice";

const useMobileNavigation = () => {
  const mobileNavOpen = useSelector((store) => store.mobileNav.mobileNavOpen);
  const dispatch = useDispatch();

  const openMobileNav = () => {
    dispatch(openNav());
    dispatch(setOpen(true));
  };
  const closeMobileNav = () => {
    dispatch(closeNav());
    dispatch(setOpen(false));
  };

  return { mobileNavOpen, openMobileNav, closeMobileNav };
};

export default useMobileNavigation;
