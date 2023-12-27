// react
import { useNavigate } from "react-router-dom";

const useRedirectDashboard = (profileData, locationState) => {
  const navigate = useNavigate();

  if (!locationState && profileData) {
    navigate("/task-management");
  }
};

export default useRedirectDashboard;
