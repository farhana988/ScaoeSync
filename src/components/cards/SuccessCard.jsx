import { Link } from "react-router";
import firework from "../../assets/images/firework.png";
import ActionBtn from "../buttons/ActionBtn";

const SuccessCard = ({ title, message, buttonText, buttonLink }) => {
  return (
    <div className="pt-[12px] flex flex-col items-center justify-center">
      <img
        src={firework}
        alt="Celebration"
        className="w-[332px] h-[328px] mb-9"
      />
      <div className="max-w-[513px] mx-auto">
        <div className="mb-20">
          <h1 className="text-[32px] font-bold text-dGray  text-center">
            {title || "Success!"}
          </h1>

          {message && <p className="text-center text-lGray mt-4">{message}</p>}
        </div>

        <ActionBtn>
          <Link to={buttonLink || "/"}>{buttonText || "Go To Home"}</Link>
        </ActionBtn>
      </div>
    </div>
  );
};

export default SuccessCard;
