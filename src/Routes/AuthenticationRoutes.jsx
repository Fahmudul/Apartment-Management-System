import React from "react";
import { Navigate } from "react-router-dom";
import useAuthInfo from "../Hooks/useAuthInfo/useAuthInfo";

const AuthenticationRoutes = ({ children }) => {
  const { user } = useAuthInfo();
  if (user) return <Navigate to="/" />;
  return children;
};

export default AuthenticationRoutes;
