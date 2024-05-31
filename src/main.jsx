import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import UserContext from "./Context/UserContext.jsx";
import router from "./Routes/Routes.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </UserContext>
  </React.StrictMode>
);
