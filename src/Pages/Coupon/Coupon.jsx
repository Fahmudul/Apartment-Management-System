import { SlCalender } from "react-icons/sl";
import "../../Pages/MakeAnnouncement/Announcements.css";
import { IoSearch } from "react-icons/io5";
import ButtonPro from "../../Components/ButtonPro/ButtonPro";
import { BiSolidCoupon } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "../../Pages/ManageMembers/Member.css";
import "./Coupon.css";
import { useState } from "react";
const Coupon = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="lg:w-[90%] p-2 mx-auto mt-5  relative">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-3xl font-semibold italic ">Coupons</h1>
        <div className="flex items-center gap-x-2">
          <div className="coupon-field flex items-center relative ">
            <input
              placeholder="Title"
              className="subscribe-input  textColor"
              name="title"
              type="text"
            />
            <IoSearch className="absolute right-3 button-hover" />
          </div>
          <ButtonPro handleShowModal={handleShowModal} />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-zebra " style={{ width: "90%" }}>
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Coupon Code</th>
              <th>Discount</th>
              <th>Description</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {/* row 1 */}
            <tr>
              <td>COZY34</td>
              <td>34%</td>
              <td>Get a 34% discount</td>
              <td>2024/01/21</td>
              <td>
                <button>
                  <SlCalender className="text-2xl hover:fill-blue-400 active:scale-95 transition-all duration-300" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Coupon popup */}
      {showModal && (
        <div
          className="coupon-container  flex justify-center lg:w-[calc(100vw-250px)]  absolute top-0 left-0 backdrop-blur-2xl"
          // style={{ border: "1px solid red" }}
        >
          <div
            className={`w-[320px] relative ${
              showModal ? "slideDown" : "slideUp"
            }`}
            style={{ animationDuration: "0.3s" }}
          >
            <button
              className="absolute top-6 right-5 cursor-pointer z-20"
              onClick={handleCloseModal}
            >
              <RxCross2 className=" textColor w-6 h-6 active:scale-95 transition-all duration-300  cursor-pointer" />
            </button>
            <div className="popup">
              <form className="formm relative">
                <p className="text-center w-full textColor font-semibold text-xl">
                  Create Coupon
                </p>
                <div className="flex w-full justify-center">
                  <BiSolidCoupon className="text-7xl textColor text-center " />
                </div>
                <div className="note">
                  <label className="titlee">Subscribe for updates</label>
                  <span className="subtitlee">
                    Subscribe to this weekly news letter so you don’t miss out
                    on the new hot tech topics.
                  </span>
                </div>
                <div className="w-full coupon-field">
                  <input
                    placeholder="Coupon code"
                    title="Enter coupon"
                    name="coupon-code"
                    type="text"
                    className="input_field"
                  />
                  <input
                    placeholder="Discount"
                    title="Enter your e-mail"
                    name="discount"
                    type="number"
                    className="input_field"
                  />
                  <input
                    placeholder="Description"
                    title="Description"
                    name="description"
                    type="text"
                    className="input_field"
                  />
                </div>
                <input
                  className=" w-full text-center py-2 rounded-lg outline-none cursor-pointer active:scale-95 transition-all duration-300 btnColor"
                  defaultValue="Add Coupon"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
