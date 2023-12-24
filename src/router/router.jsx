// react router imports
import { createBrowserRouter } from "react-router-dom";

// layout
import RootLayout from "../components/layouts/RootLayout";
import TaskDashboardLayout from "../components/layouts/TaskDashboardLayout";
import AuthLayout from "../components/layouts/AuthLayout";

// page components
import Home from "../components/pages/Home/Home";
import TaskManagement from "../components/pages/TaskManagement/TaskManagement";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";
import ErrorPage from "./../components/pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
    errorElement: <ErrorPage />,
  },
  {
    path: "/task-management",
    element: <TaskDashboardLayout />,
    children: [{ path: "/task-management", element: <TaskManagement /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
