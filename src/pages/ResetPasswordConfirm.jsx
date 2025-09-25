import React from "react";
import SuccessCard from "../components/cards/SuccessCard";

const ResetPasswordConfirm = () => {
  return (
    <SuccessCard
      title="Password Changed Successfully!"
      buttonText="Go to Login"
      buttonLink="/login"
      message={"Your account is set up! Just verify your email to get started."}
    />
  );
};

export default ResetPasswordConfirm;
