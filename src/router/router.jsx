// react router imports
import { createBrowserRouter } from "react-router-dom";

// main layout
import RootLayout from "../components/layouts/RootLayout";
import TaskDashboardLayout from "../components/layouts/TaskDashboardLayout";

// page components
import Home from "../components/pages/Home/Home";
import TaskManagement from "../components/pages/TaskManagement/TaskManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/task-management",
    element: <TaskDashboardLayout />,
    children: [{ path: "/task-management", element: <TaskManagement /> }],
  },
]);

export default router;
