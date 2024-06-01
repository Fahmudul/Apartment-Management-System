import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const { user, SignOut } = useAuthInfo();

  const handleSignout = () => {
    SignOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="gradientBg w-40 px-3 py-3 space-y-3 rounded-3xl absolute -right-[55px] slideDown">
      <p className="text-center text-2xl textColor">{user?.displayName}</p>
      <Link to="/dashboard" className="flex justify-center">
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
