/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import room from "../../assets/sampleImage.png";
import { useMutation } from "@tanstack/react-query";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Widget({ item, refetch }) {
  const { user } = useAuthInfo();
  const axiosToken = useAxiosToken();
  const navigate = useNavigate();
  const {
    floor_no,
    block_name,
    apartment_no,
    rent,
    description,
    id,
    _id,
    ready,
  } = item;
  //
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setTheme(selectedTheme);
  }, []);

  // Make Agrement Request using Tan Stack useMutation
  const { mutateAsync } = useMutation({
    mutationFn: async (agreementDetails) => {
      const { data } = await axiosToken.post(
        `/agreements/?email=${user?.email}`,
        agreementDetails
      );
      //
      return data;
    },
    onSuccess: (data) => {
      if (data["insertedId"]) {
        toast.success("Agreement Requested Successfully");
      }
      refetch();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  const handleAgreement = async (_id) => {
    if (!user) {
      toast.error("Please Login First!");
      return navigate("/login");
    }
    //
    const agreementDetails = {
      id: id,
      roomId: _id,
      block_name,
      floor_no,
      apartment_no,
      rent,
      description,
      customerName: user?.displayName,
      customerEmail: user?.email,
      customerPhoto: user?.photoURL,
      status: "pending",
      agreemtentDate: String(new Date()),
      ready,
    };
    console.table(agreementDetails);
    await mutateAsync(agreementDetails);
  };
  return (
    <div className="lg:w-[384px] w-[345px] min-h-[390px] relative card_color text-white rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 ">
      <div className="relative -top-12 h-48 ">
        <div className="w-[320px] mx-auto h-48 relative">
          <img
            src={room}
            alt="Profile Image"
            className="w-full mx-auto h-48 object-cover rounded-2xl"
          />
          <span className="px-3 py-1 rounded-full backdrop-blur-md absolute top-2 right-2 ">
            {`$${rent}`}
          </span>
        </div>
      </div>
      <div className="p-6 text-center absolute bottom-0">
        <h2 className="text-xl font-semibold text-center">{`"${block_name}"`}</h2>
        <p className="text-zinc-400">{`Floor - ${floor_no} | Appartment - ${apartment_no}`}</p>
        <p className="mt-2  text-zinc-500 w-[336px] h-[72px]">{description}</p>
        <p className="mb-2">{ready}</p>
        <button
          disabled={ready === "Ready For You!" ? false : true}
          onClick={() => handleAgreement(_id)}
          className={`button-banner lg:px-5 lg:py-4 py-3 px-3 rounded-xl font-bold mr-2 active:scale-90 ${
            ready === "Ready For You!" ? "cursor-pointer" : "cursor-not-allowed"
          }  ${
            theme === "light"
              ? "hover:outline outline-[#d19b59] text-[#ECE3CA]  hover:transition-all hover:duration-500 bg-[#b18045] hover:bg-transparent hover:text-[#b18045]"
              : "hover:outline outline-[#6a58dd] text-[#352f91] hover:transition-all hover:duration-500 bg-[#6a58dd] hover:bg-transparent hover:text-[#6a58dd]"
          } `}
        >
          Make Agreement
        </button>
      </div>
    </div>
  );
}
Widget.propTypes = {
  item: PropTypes.shape({
    floor_no: PropTypes.number,
    block_name: PropTypes.string,
    apartment_no: PropTypes.string,
    rent: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.number,
    refetch: PropTypes.func,
  }).isRequired,
};
