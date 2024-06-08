import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./common.css";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  // Get client secret from backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('clicked')
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="checkout-form w-full flex"
        style={{ display: "flex" }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="cards checkout py-5 px-1 w-full">
          <label className="title">Checkout</label>
          <div className="details">
            <span>Your carts subtotal:</span>
            <span>47.99$</span>
            <span>Discount through applied couponss:</span>
            <span>3.99$</span>
            <span>Shipping fees:</span>
            <span>4.99$</span>
          </div>
          <div className="checkout--footer ">
            <label className="prices">
              <sup>$</sup>57.99
            </label>
            <button type="submit" disabled={!stripe} className="checkout-btn ">
              Checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
