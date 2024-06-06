import { useEffect, useState } from "react";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import "./Dashboard.css";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "../../index.css";
import AdminBar from "../../Components/AdminBar/AdminBar";
import UserBar from "../../Components/UserBar/UserBar";
import MemberBar from "../../Components/MemberBar/MemberBar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const { data } = useAdmin();
  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme");
    // console.log(currentTheme)
    document.querySelector("body").setAttribute("data-theme", currentTheme);
  });
  // console.log(data?.role);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main-screen flex min-w-screen min-h-screen ">
      <div className="relative">
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
                    {isOpen ? (
                      <IoCloseSharp className="w-8 h-8" />
                    ) : (
                      <RiMenu2Fill className="w-6 h-6" />
                    )}
                  </span>
                </button>
                <h1
                  className="text-white text-2xl italic font-semibold tracking-widest pl-3 w-full"
                  // style={{ border: "1px solid red" }}
                >
                  CozyNest
                </h1>
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
      <div className="bgColor ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
