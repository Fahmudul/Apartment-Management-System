import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import LoginSignUp from "../Pages/LoginSignUp/LoginSignUp";
import ErrorElement from "../Pages/Error/ErrorElement";
import Appartment from "../Pages/Appartment/Appartment";
import PrivateRoutes from "./PrivateRoutes";
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
]);
export default router;
