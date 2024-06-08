import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import LoginSignUp from "../Pages/LoginSignUp/LoginSignUp";
import ErrorElement from "../Pages/Error/ErrorElement";
import Appartment from "../Pages/Appartment/Appartment";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProfile from "../Pages/Profile/AdminProfile";
import Announcements from "../Pages/Announcements/Announcements";
import ManageMembers from "../Pages/ManageMembers/ManageMembers";
import AggrementRequests from "../Pages/AggrementRequests/AggrementRequests";
import Coupon from "../Pages/Coupon/Coupon";
import AdminRoutes from "./AdminRoutes";
import CommonProfile from "../Pages/Profile/CommonProfile";
import MakeAnnouncement from "../Pages/MakeAnnouncement/MakeAnnouncement";
import MemberRoutes from "./MemberRoutes";
import Payments from "../Pages/Payments/Payments";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
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
  // Dashboard Routes
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
        element: (
          <PrivateRoutes>
            <CommonProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "profileM",
        element: (
          <MemberRoutes>
            <CommonProfile />
          </MemberRoutes>
        ),
      },
      {
        path: "payment",
        element: (
          <MemberRoutes>
            <Payments />
          </MemberRoutes>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <MemberRoutes>
            <PaymentHistory />
          </MemberRoutes>
        ),
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
        path: "makeannouncements",
        element: (
          <AdminRoutes>
            <MakeAnnouncement />
          </AdminRoutes>
        ),
      },
      {
        path: "members",
        element: (
          <AdminRoutes>
            <ManageMembers />
          </AdminRoutes>
        ),
      },

      {
        path: "requests",
        element: (
          <AdminRoutes>
            <AggrementRequests />
          </AdminRoutes>
        ),
      },
      {
        path: "coupons",
        element: <Coupon />,
      },
    ],
  },
  {
    path: "/checkout",
    element: (
      <MemberRoutes>
        <CheckOutPage />
      </MemberRoutes>
    ),
  },
]);
export default router;
