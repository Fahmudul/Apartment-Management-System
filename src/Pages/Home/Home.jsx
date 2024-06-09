import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import AboutBuilding from "../../Components/AboutBuilding/AboutBuilding";
import MapContainer from "../../Components/MapContainer/MapContainer";
import CouponCard from "../../Components/CouponCard/CouponCard";
import Footer from "../../Components/Shared/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import useAxiosBase from "../../Hooks/useAxiosBase/useAxiosBase";
const Home = () => {
  const axiosBase = useAxiosBase();
  const { data: couponListcouponList = [] } = useQuery({
    queryKey: ["couponList"],
    queryFn: async () => {
      const { data } = await axiosBase("/coupon");
      return data;
    },
  });
  return (
    <div className=" min-h-screen w-[90%]  mx-auto ">
      <Helmet>
        <title>CozyNest | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="slider-auto min-h-[340px] ">
        <Banner />
      </div>
      <div className="lg:mt-[100px]">
        <AboutBuilding />
      </div>
      {/* Coupon Section */}
      <div className="flex justify-center mt-[100px] gap-7">
        <div className="w-[260px] carousel rounded-box">
          {couponListcouponList.map((coupon) => (
            <div key={coupon._id} className="carousel-item w-full">
              <CouponCard coupon={coupon} />
            </div>
          ))}
        </div>
        <div className=" xsm:text-2xl xsm:mt-8 lg:mt-[100px] lg:text-5xl textColor mb-5">
          Slide the coupon <br /> to see more coupons
        </div>
      </div>
      <div className="googleMap lg:mt-[100px]">
        <h1 className="text-center xsm:text-2xl xsm:mt-8 lg:mt-[100px] lg:text-5xl textColor mb-5">
          Find Our Location Here
        </h1>

        <MapContainer />
      </div>
    </div>
  );
};

export default Home;
