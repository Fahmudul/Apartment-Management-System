import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import LoginSignUp from "../Pages/LoginSignUp/LoginSignUp";
import ErrorElement from "../Pages/Error/ErrorElement";
import Appartment from "../Pages/Appartment/Appartment";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProfile from "../Pages/Profile/AdminProfile";
import Announcements from "../Components/Announcements/Announcements";
import ManageMembers from "../Components/ManageMembers/ManageMembers";
import AggrementRequests from "../Components/AggrementRequests/AggrementRequests";
import Coupon from "../Components/Coupon/Coupon";
import AdminRoutes from "./AdminRoutes";
import CommonProfile from "../Pages/Profile/CommonProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appartment",
        element: (
          <PrivateRoutes>
            <Appartment />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginSignUp />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "profile",
        element: <CommonProfile />,
      },
      {
        path: "profileM",
        element: <CommonProfile />,
      },
      {
        path: "profileA",
        element: (
          <AdminRoutes>
            <AdminProfile />
          </AdminRoutes>
        ),
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "members",
        element: <ManageMembers />,
      },

      { path: "requests", element: <AggrementRequests /> },
      {
        path: "coupons",
        element: <Coupon />,
      },
    ],
  },
]);
export default router;
