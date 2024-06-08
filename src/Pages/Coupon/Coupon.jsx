import { SlCalender } from "react-icons/sl";
import "../../Pages/MakeAnnouncement/Announcements.css";
import { IoSearch } from "react-icons/io5";
import ButtonPro from "../../Components/ButtonPro/ButtonPro";
import { BiSolidCoupon } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import "../../Pages/ManageMembers/Member.css";
import "./Coupon.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { toast } from "react-toastify";
const Coupon = () => {
  const axiosToken = useAxiosToken();
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
  const [couponStartDate, setCouponStartDate] = useState(
    new Date().toLocaleDateString()
  );

  //Get all coupon
  const { data: couponData = [], refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const { data } = await axiosToken.get("/coupon");
      // console.log(data);
      return data;
    },
  });
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // console.log(startDate);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (couponData) => {
      const { data } = await axiosToken.post("/coupon", couponData);
      console.log(data);
      return data;
    },
    onSuccess: (data) => {
      if (data["insertedId"]) {
        toast.success("Coupon Created Successfully");
        handleCloseModal();
        refetch();
      }
    },
  });

  //Change Coupon expiration date

  const { mutateAsync: newMutateAsync } = useMutation({
    mutationFn: async (expitationTime) => {
      const { data } = await axiosToken.patch("/coupon", expitationTime);
      console.log(data);
      return data;
    },
    onSuccess: (data) => {
      if (data["modifiedCount"] > 0) {
        toast.success("Expiration Date Changed Successfully");
        refetch();
      }
    },
  });
  const changeCouponStartDate = async (e, couponId) => {
    const newExpriationDate = e.target.value;
    console.log(couponId);
    await newMutateAsync({ newExpriationDate, couponId });
  };
  // console.log(couponStartDate);

  const handleCreateCoupon = async (e) => {
    e.preventDefault();
    const form = e.target;
    const couponCode = form.couponCode.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const expriation = form.expriationDate.value;
    const couponData = {
      couponCode,
      discount,
      description,
      expriation,
    };
    // console.table(couponData);
    await mutateAsync(couponData);
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
            {couponData.map((coupon) => (
              <tr key={coupon._id} className="">
                <td>{coupon.couponCode}</td>
                <td>{coupon.discount}%</td>
                <td>{coupon.description}</td>
                <td>{coupon.expriation}</td>
                <td className="">
                  <input
                    type="date"
                    name="date"
                    id=""
                    className="bg-transparent"
                    onChange={(e) => changeCouponStartDate(e, coupon._id)}
                  />
                </td>
              </tr>
            ))}
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
              <form className="formm relative" onSubmit={handleCreateCoupon}>
                <p className="text-center w-full textColor font-semibold text-xl">
                  Create Coupon
                </p>
                <div className="flex w-full justify-center">
                  <BiSolidCoupon className="text-7xl textColor text-center " />
                </div>
                <div className="note">
                  <label className="text-2xl text-center">Create Coupon</label>
                  <span className="subtitlee">
                    Create coupon for user to get discount
                  </span>
                </div>
                <div className="w-full coupon-field">
                  <input
                    placeholder="Coupon code"
                    title="Enter coupon"
                    name="couponCode"
                    type="text"
                    className="input_field"
                    required
                  />
                  <input
                    placeholder="Discount"
                    title="Enter your e-mail"
                    name="discount"
                    type="number"
                    className="input_field"
                    required
                  />
                  <input
                    placeholder="Description"
                    title="Description"
                    name="description"
                    type="text"
                    className="input_field"
                    required
                  />
                  <input
                    placeholder="Description"
                    title="date"
                    name="expriationDate"
                    type="date"
                    className="textColor"
                    required
                    onChange={(e) => setCouponStartDate(e.target.value)}
                  />
                </div>
                <input
                  className=" w-full text-center py-2 rounded-lg outline-none cursor-pointer active:scale-95 transition-all duration-300 btnColor"
                  defaultValue="Add Coupon"
                  type="submit"
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
