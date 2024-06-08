import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./common.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ paymentInfo, withDiscount, discountableAmount }) => {
  const axiosToken = useAxiosToken();
  const { user } = useAuthInfo();
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const [defaultAmount, setDefaultAmount] = useState(0);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const elements = useElements();
  // // Get client secret from backend
  useEffect(() => {
    if (defaultAmount) {
      const getCLientSecret = async () => {
        const { data } = await axiosToken.post("/create-payment-intent", {
          price: defaultAmount,
        });

        setClientSecret(data.clientSecret);
      };
      getCLientSecret();
    }
  }, [axiosToken, defaultAmount]);
  // console.log(clientSecret);
  // Get client secret from backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = document.querySelector(".finalAmount").innerText;
    setDefaultAmount(parseInt(amount.slice(1)));
    // console.log('clicked')
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
    }
    // Confirm payment
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    console.log(paymentIntent);
    if (paymentError) {
      toast.error(paymentError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("succeeded");
        setTransactionId(paymentIntent.id);
        const paymentInfo = {
          email: user?.email,
          price: defaultAmount,
          date: new Date().toLocaleDateString(),
          transactionId: paymentIntent.id,
        };
        const res = await axiosToken.post("/paymentsHistory", paymentInfo);
        // console.log(res);

        if (res.data.insertedId) {
          toast.success("Payment successful");
          setTimeout(() => {
            navigate("/dashboard/paymentHistory");
          }, 1500);
          //   refetch();
        }
      }
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
            <span>{paymentInfo?.rent}$</span>
            <span>Discount through applied coupons:</span>
            <span>{discountableAmount}$</span>
          </div>
          <div className="checkout--footer ">
            <label className="prices finalAmount">
              <sup>$</sup>
              {withDiscount ? withDiscount : paymentInfo?.rent}
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
