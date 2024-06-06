import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import room from "../../assets/sampleImage.png";
import { useMutation } from "@tanstack/react-query";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
export default function Widget({ item, refetch }) {
  const { user } = useAuthInfo();
  const { floor_no, block_name, apartment_no, rent, description, id } = item;
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setTheme(selectedTheme);
  }, []);

  // Make Agrement Request using Tan Stack useMutation
  const { mutateAsync } = useMutation({
    mutationFn: async () => {},
    onSuccess: () => {
      refetch();
    },
  });
  const handleAgreement = async () => {
    const agreementDetails = {
      id: id,
      block_name,
      floor_no,
      apartment_no,
      rent,
      description,
      customerName: user.displayName,
      customerEmail: user.email,
      status: "pending",
    };

    // await mutateAsync();
  };
  return (
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
  }).isRequired,
};
