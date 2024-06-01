import axios from "axios";
const url = "https://api.cloudinary.com/v1_1/da9tj7fus/image/upload";
const getImageUrl = async (file) => {
  // let photoUrl;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kmak810w");
  const photoUrl = await axios
    .post(url, formData)
    .then((res) => {
      return res?.data?.secure_url;
    })
    .catch((err) => {
      console.error(err);
    });
  return photoUrl;
};
export default getImageUrl;
