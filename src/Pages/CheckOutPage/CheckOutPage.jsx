import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckOutPage.css";
import CheckoutForm from "./CheckoutForm";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { useQuery } from "@tanstack/react-query";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import useCoupon from "../../Hooks/useCoupon/useCoupon";
import { toast } from "react-toastify";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const CheckOutPage = () => {
  const { user } = useAuthInfo();
  const { data } = useCoupon();
  const [withDiscount, setWithDiscount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  const axiosToken = useAxiosToken();
  const { data: paymentInfo = {} } = useQuery({
    queryKey: ["checkout"],
    enabled: !!user,

    queryFn: async () => {
      const { data } = await axiosToken(`/agreements/?email=${user?.email}`);
      console.log(data.rent);
      setWithDiscount(data.rent);
      return data;
    },
  });
  const [discountableAmount, setDiscountableAmount] = useState(0);

  // console.log(withOutDiscount);
  // console.log(withDiscount);
  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme");
    // console.log(currentTheme);
    document.querySelector("body").setAttribute("data-theme", currentTheme);
  });

  // Check coupon expiration function
  function isTodayBefore(givenDate) {
    // Create a Date object from the given string
    const comparisonDate = new Date(givenDate);

    // Get today's Date object
    const today = new Date();

    // Compare the dates using getTime()
    return today.getTime() <= comparisonDate.getTime();
  }

  // Apply coupons
  const handleApplyCouons = (e) => {
    // console.log("clied");
    e.preventDefault();
    const couponText = e.target.text.value;
    // Check if coupon is valid
    const couponTextValid = data.find(
      (coupon) => coupon.couponCode === couponText
    );
    if (couponTextValid) {
      //  Check if coupon is expired
      const isExpired = isTodayBefore(couponTextValid.expriation);
      console.log(isExpired);
      if (isExpired !== false) {
        console.log(paymentInfo.rent);
        const discountableAmount =
          paymentInfo.rent * (parseInt(couponTextValid.discount) / 100);
        setDiscountableAmount(discountableAmount);
        const payableAmount =
          paymentInfo.rent -
          paymentInfo.rent * (parseInt(couponTextValid.discount) / 100);
        setWithDiscount(payableAmount);
        setDisableBtn(true);
        // console.log(payableAmount);
      } else {
        toast.error("Coupon expired!");
      }
    } else {
      toast.error("Invalid coupon!");
    }
  };
  return (
    <div
      className="min-h-screen min-w-screen backgroundColor flex justify-center items-center"
      // style={{ border: "1px solid red" }}
    >
      <div
        className="master-container mx-auto min-w-[390px] "
        // style={{ border: "1px solid red" }}
      >
        <div
          className="cards carts w-full mx-auto card_color shadow-2xl rounded-3xl"
          // style={{ border: "1px solid red" }}
        >
          <div className="cards couponss  p-5 ">
            <label className="title">Apply coupons</label>
            <form className="form" onSubmit={handleApplyCouons}>
              <input
                type="text"
                name="text"
                placeholder="Apply your couponss here"
                className="input_field min-w-[160px] mr-3 "
              />
              <button
                disabled={disableBtn}
                className={`${
                  disableBtn ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Apply
              </button>
            </form>
          </div>

          {/* Payment Card form */}

          <Elements stripe={stripePromise}>
            <CheckoutForm
              paymentInfo={paymentInfo}
              withDiscount={withDiscount}
              discountableAmount={discountableAmount}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
