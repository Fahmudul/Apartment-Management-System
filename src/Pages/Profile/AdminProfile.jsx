import useAdmin from "../../Hooks/useAdmin/useAdmin";

const AdminProfile = () => {
  const { data } = useAdmin();
  console.log(data);
  return <div></div>;
};

export default AdminProfile;
