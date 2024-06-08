import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckOutPage.css";
import CheckoutForm from "./CheckoutForm";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const CheckOutPage = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme");
    // console.log(currentTheme);
    document.querySelector("body").setAttribute("data-theme", currentTheme);
  });
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
            <form className="form">
              <input
                type="text"
                placeholder="Apply your couponss here"
                className="input_field min-w-[160px] mr-3"
              />
              <button>Apply</button>
            </form>
          </div>

          {/* Payment Card form */}

          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>

        
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
