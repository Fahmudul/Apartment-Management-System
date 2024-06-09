import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import Widget from "../../Components/Card/Card2";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";

const Appartment = () => {
  const axiosToken = useAxiosToken();

  //Pagination configuration
  const { data: roomscount } = useQuery({
    queryKey: ["roomscount"],
    queryFn: async () => {
      const { data } = await axiosToken("/allAppartments");
      //
      return data.count;
    },
  });
  // Number of buttons
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const Pages = Math.ceil(roomscount / itemsPerPage);
  const numberOfItemsForButton = Array.from(
    { length: Pages },
    (_, index) => index + 1
  );

  const {
    data: appartments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appartment", itemsPerPage, currentPage],
    queryFn: async () => {
      const { data } = await axiosToken(
        `/allRooms/?skip=${currentPage}&limit=${itemsPerPage}`
      );
      //
      return data;
    },
  });
  //
  if (isLoading) return <Loader />;
  return (
    <div className="">
      <h1 className="text-4xl underline font-bold text-center textColor">
        Browse Available Apartments
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 border-2 pt-9 mx-auto px-3 place-items-center lg:w-[95%]">
        {appartments.map((item) => (
          <Widget key={item._id} item={item} refetch={refetch} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 overflow-x-auto">
        <button
          className="btnColor  mr-2 p-2 rounded-xl active:scale-95"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Prev
        </button>
        {numberOfItemsForButton.map((number, idx) => (
          <button
            key={idx}
            className={`btnColor w-8 mr-2 p-2 rounded-xl active:scale-95 ${
              currentPage === number && "bg-[#b18045] text-white"
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="btnColor  mr-2 p-2 rounded-xl active:scale-95"
          onClick={() => {
            if (currentPage < Pages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
        <select
          name="itemsPerPage"
          id=""
          className=" mr-2 p-2 rounded-xl active:scale-95"
          onChange={(e) => {
            setItemsPerPage(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="8">6</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Appartment;
