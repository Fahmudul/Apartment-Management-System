import { SlCalender } from "react-icons/sl";
import "../MakeAnnouncement/Announcements.css";
import { IoSearch } from "react-icons/io5";
import ButtonPro from "../ButtonPro/ButtonPro";
import "../ManageMembers/Member.css";
import "./Coupon.css";
const Coupon = () => {
  return (
    <div className="lg:w-[90%] p-2 mx-auto mt-5 overflow-x-auto">
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
          <ButtonPro />
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
      <div
        className="coupon-container  flex justify-center"
        style={{ border: "1px solid red" }}
      >
        <div className="popup ">
          <form className="form">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 34 34"
                height={34}
                width={34}
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  stroke="#115DFC"
                  d="M7.08385 9.91666L5.3572 11.0677C4.11945 11.8929 3.50056 12.3055 3.16517 12.9347C2.82977 13.564 2.83226 14.3035 2.83722 15.7825C2.84322 17.5631 2.85976 19.3774 2.90559 21.2133C3.01431 25.569 3.06868 27.7468 4.67008 29.3482C6.27148 30.9498 8.47873 31.0049 12.8932 31.1152C15.6396 31.1838 18.3616 31.1838 21.1078 31.1152C25.5224 31.0049 27.7296 30.9498 29.331 29.3482C30.9324 27.7468 30.9868 25.569 31.0954 21.2133C31.1413 19.3774 31.1578 17.5631 31.1639 15.7825C31.1688 14.3035 31.1712 13.564 30.8359 12.9347C30.5004 12.3055 29.8816 11.8929 28.6437 11.0677L26.9171 9.91666"
                />
                <path
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  stroke="#115DFC"
                  d="M2.83331 14.1667L12.6268 20.0427C14.7574 21.3211 15.8227 21.9603 17 21.9603C18.1772 21.9603 19.2426 21.3211 21.3732 20.0427L31.1666 14.1667"
                />
                <path
                  strokeWidth="2.5"
                  stroke="#115DFC"
                  d="M7.08331 17V8.50001C7.08331 5.82872 7.08331 4.49307 7.91318 3.66321C8.74304 2.83334 10.0787 2.83334 12.75 2.83334H21.25C23.9212 2.83334 25.2569 2.83334 26.0868 3.66321C26.9166 4.49307 26.9166 5.82872 26.9166 8.50001V17"
                />
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  stroke="#115DFC"
                  d="M14.1667 14.1667H19.8334M14.1667 8.5H19.8334"
                />
              </svg>
            </div>
            <div className="note">
              <label className="titlee">Subscribe for updates</label>
              <span className="subtitlee">
                Subscribe to this weekly news letter so you don’t miss out on
                the new hot tech topics.
              </span>
            </div>
            <div className="w-full coupon-field">
              <input
                placeholder="Enter your e-mail"
                title="Enter your e-mail"
                name="email"
                type="email"
                className="input_field"
              />
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
