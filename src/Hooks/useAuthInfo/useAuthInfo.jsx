import React, { useContext } from "react";
import { UserAuthContext } from "../../Context/UserContext";

const useAuthInfo = () => {
  const authInfo = useContext(UserAuthContext);
  return authInfo;
};

export default useAuthInfo;
