import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { UserAuthContext } from "../Context/UserContext";
import useAuthInfo from "../Hooks/useAuthInfo/useAuthInfo";
import useAdmin from "../Hooks/useAdmin/useAdmin";

const MemberRoutes = ({ children }) => {
  //Checking if user is admin
  const { data } = useAdmin();
  //
  const location = useLocation();
  const { user, loading } = useAuthInfo(UserAuthContext);
  if (loading) return <Loader />;

  if (user && data?.role === "member") return children;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default MemberRoutes;
