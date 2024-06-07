import { useEffect } from "react";
import "./CheckOutPage.css";
const CheckOutPage = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme");
    console.log(currentTheme);
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
            <form className="form" >
              <input
                type="text"
                placeholder="Apply your couponss here"
                className="input_field min-w-[160px] mr-3"
              />
              <button>Apply</button>
            </form>
          </div>

          <div className="cards checkout p-5">
            <label className="title">Checkout</label>
            <div className="details">
              <span>Your carts subtotal:</span>
              <span>47.99$</span>
              <span>Discount through applied couponss:</span>
              <span>3.99$</span>
              <span>Shipping fees:</span>
              <span>4.99$</span>
            </div>
            <div className="checkout--footer">
              <label className="prices">
                <sup>$</sup>57.99
              </label>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
