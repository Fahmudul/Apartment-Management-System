import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import Widget from "../../Components/Card/Card2";
import { useState } from "react";

const Appartment = () => {
  const axiosToken = useAxiosToken();
  const { data: appartments = [], refetch } = useQuery({
    queryKey: ["appartment"],
    queryFn: async () => {
      const { data } = await axiosToken("/allRooms");
      // console.log(data);
      return data;
    },
  });

  //Pagination configuration
  const { data: roomscount } = useQuery({
    queryKey: ["roomscount"],
    queryFn: async () => {
      const { data } = await axiosToken("/allAppartments");
      console.log(data.count);
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
  console.log(numberOfItemsForButton);
  return (
    <div className="">
      <div className="mt-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 border-2 pt-9 mx-auto px-3 place-items-center">
        {appartments.slice(0, 8).map((item) => (
          <Widget key={item._id} item={item} refetch={refetch} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 ">
        <button className="btnColor  mr-2 p-2 rounded-xl active:scale-95">Prev</button>
        {numberOfItemsForButton.map((number, idx) => (
          <button key={idx} className="btnColor w-8 mr-2 p-2 rounded-xl active:scale-95">
            {number}
          </button>
        ))}
        <button className="btnColor  mr-2 p-2 rounded-xl active:scale-95">Next</button>
      </div>
    </div>
  );
};

export default Appartment;
