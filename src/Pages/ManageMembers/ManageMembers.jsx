import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./Member.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { toast } from "react-toastify";
const ManageMembers = () => {
  const axiosToken = useAxiosToken();
  const { data: members = [], refetch } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosToken("/users");
      return data;
    },
  });
  // Change role of member to user
  const { mutateAsync } = useMutation({
    mutationFn: async (email) => {
      const { data } = await axiosToken.patch(`/users/?email=${email}`, {
        role: "user",
      });
      return data;
    },
    onSuccess: (data) => {
      if (data["modifiedCount"] > 0) {
        toast.success("Role Changed Successfully");
        refetch();
      }
    },
  });
  const handleMembers = async (memberEmail) => {
    await mutateAsync(memberEmail);
    //
  };
  return (
    <div className="w-[90%] mx-auto mt-5 ">
      <h1 className="text-3xl font-semibold italic mb-5">
        Number of Members: {members.length}
      </h1>
      <div className="overflow-x-auto   px-1 py-2">
        <table className="table" style={{ width: "90%" }}>
          {/* head */}
          <thead>
            <tr className="">
              <th className="text-lg">Name</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Role</th>
              <th className="text-lg">Member since</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {members.map((member) => (
              <tr key={member._id} className="">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={member?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{member?.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-lg">
                  {member?.email}
                  <br />
                </td>
                <td className="text-lg ">
                  <span className="outlinedColor px-2 pt-[5px] rounded-full text-center font-semibold uppercase inline-block w-[100px]">
                    {member?.role}
                  </span>
                </td>
                <td className="text-lg">01/01/2020</td>
                <th className="pl-7">
                  <button
                    className="active:scale-95"
                    onClick={() => handleMembers(member?.email)}
                  >
                    <IoIosRemoveCircleOutline className="w-6 h-6 hover:fill-red-500" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
