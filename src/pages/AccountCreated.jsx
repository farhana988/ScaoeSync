import SuccessCard from "../components/cards/SuccessCard";

const AccountCreated = () => {
  return (
    <SuccessCard
      title="Account Created Successfully!"
      buttonText="Go To Login"
      buttonLink="/login"
    />
  );
};

export default AccountCreated;
