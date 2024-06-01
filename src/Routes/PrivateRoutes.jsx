import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { UserAuthContext } from "../Context/UserContext";
import useAuthInfo from "../Hooks/useAuthInfo/useAuthInfo";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthInfo(UserAuthContext);
  if (loading) return <Loader />;

  if (user) return children;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
