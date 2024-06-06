import { useState } from "react";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import "./Dashboard.css";
import { RiProfileLine, RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AdminBar from "../../Components/AdminBar/AdminBar";
import UserBar from "../../Components/UserBar/UserBar";
import MemberBar from "../../Components/MemberBar/MemberBar";
const Dashboard = () => {
  const navItems = ["home", "settings", "build", "cloud", "mail", "bookmark"];
  const { data } = useAdmin();
  // console.log(data?.role);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <section className="page sidebar-2-page">
          <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
            <div className="inner">
              <header>
                <button
                  type="button"
                  className="sidebar-2-burger"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="material-symbols-outlined">
                    {isOpen ? <IoCloseSharp className="w-8 h-8"/> : <RiMenu2Fill className="w-6 h-6"/>}
                  </span>
                </button>
              </header>
              <nav>
                {data?.role === "admin" && <AdminBar />}
                {data?.role === "user" && <UserBar />}
                {data?.role === "member" && <MemberBar />}
              </nav>
            </div>
          </aside>
        </section>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
