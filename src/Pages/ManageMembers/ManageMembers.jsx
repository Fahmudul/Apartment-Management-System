import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./Member.css";
const ManageMembers = () => {

  return (
    <div className="w-[90%] mx-auto mt-5 ">
      <h1 className="text-3xl font-semibold italic mb-5">
        Number of Members: 5
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
            <tr className="">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td className="text-lg">
                sample@gmail.com
                <br />
              </td>
              <td className="text-lg ">
                <span className="outlinedColor px-2 py-1 rounded-full uppercase">
                  Member
                </span>
              </td>
              <td className="text-lg">01/01/2020</td>
              <th className="pl-7">
                <button className="active:scale-95">
                  <IoIosRemoveCircleOutline className="w-6 h-6 hover:fill-red-500" />
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
