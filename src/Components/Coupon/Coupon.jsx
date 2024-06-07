import { SlCalender } from "react-icons/sl";
import "../MakeAnnouncement/Announcements.css";
import { IoSearch } from "react-icons/io5";
import ButtonPro from "../ButtonPro/ButtonPro";
import Modal from "../Modal/Modal";
const Coupon = () => {
  return (
    <div className="lg:w-[90%] mx-auto mt-5">
      <div className="flex justify-between mb-5">
        <h1 className="text-3xl font-semibold italic mb-5">Coupons</h1>
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
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th></th>
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
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
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
      <div>
      
      </div>
    </div>
  );
};

export default Coupon;
