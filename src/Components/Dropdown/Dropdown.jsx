import useAdmin from "../../Hooks/useAdmin/useAdmin";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { user, SignOut } = useAuthInfo();
  const { data } = useAdmin();
  const handleSignout = () => {
    SignOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="card_color w-40 px-3 py-3 space-y-3 rounded-3xl absolute top-14 -right-[55px] slideDown " >
      <p className="text-center text-2xl textColor">{user?.displayName}</p>
      <Link to={`${data?.role === "admin" ? "/dashboard/profileA" : data?.role === "member" ? "/dashboard/profileM" : "/dashboard/profile"}`} className="flex justify-center">
        Dashboard
      </Link>
      <button
        className="btnColor w-full rounded-full py-1 active:scale-95 transition-all duration-300"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dropdown;
