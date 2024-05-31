import React from "react";

const ButtonPrimary = ({ text }) => {
  const btnStyle = {
    width: "150px",
    height: "50px",
    border: "none",
    borderRadius: "50px",
    background: "#af9484",
    boxShadow:
      "0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
    color: "#fff",
    fontWeight: "600",
    margin: "10px 0",
    textTransform: "uppercase",
    cursor: "pointer",
  };
  return (
    <button className="hover:bg-[#a8785b] hover:transition hover:duration-300 hover:scale-105"  id="sign-in-btn" style={btnStyle}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
