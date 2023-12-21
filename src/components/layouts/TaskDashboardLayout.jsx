// react-router imports
import { Outlet } from "react-router-dom";

// dashboard header
import DashboardHeader from "../shared/DashboardHeader/DashboardHeader";

function TaskDashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
    </div>
  );
}

export default TaskDashboardLayout;
