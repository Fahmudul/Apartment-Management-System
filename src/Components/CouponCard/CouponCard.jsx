import "./CouponCard.css";
import { CiHome } from "react-icons/ci";
const CouponCard = ({ coupon }) => {
  const { couponCode, discount, description, expriation } = coupon;
  //
  // const {}
  function getDateDetails(dateString) {
    // Create a Date object from the given string
    const dateObject = new Date(dateString);

    // Extract day, month index (0-based), and year
    const day = dateObject.getDate();
    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();

    // Month names array
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the month name
    const monthName = monthNames[monthIndex];

    // Return an object with day, month name, and year (optional)
    return {
      day,
      monthName,
      year, // Include year if needed
    };
  }
  return (
    <div className="flip-card px-5">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ display: "block" }}>
          <div className="flex justify-center">
            <CiHome className="text-[80px]" />
            <div className="h-[60px] mt-[15px]">
              <p className="Title">Discount</p>
              <p className="text-2xl">{discount}%</p>
            </div>
          </div>
          <p className="text-3xl mt-6">{description}</p>
          <p className="text-3xl mt-6">
            Expires at {getDateDetails(expriation).day}{" "}
            {getDateDetails(expriation).monthName}
          </p>
        </div>
        <div
          className="flip-card-back"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="Title">{couponCode}</p>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
