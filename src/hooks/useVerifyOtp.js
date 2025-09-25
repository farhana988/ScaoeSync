import { useState } from "react";
import { useNavigate } from "react-router";
import { verifyOtpService } from "../utils/verifyOtpService";

const useVerifyOtp = (email, otp) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    setLoading(true);
    setMessage("");
    
    try {
      const result = await verifyOtpService(email, otp.join(""));

      if (result.ok) {
        setMessage("OTP verified successfully!");
        navigate("/account-created");
      } else {
        setMessage(result.message || "Verification failed.");
      }
    } catch (err) {
      setMessage("Network error.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, message, handleVerify };
};

export default useVerifyOtp;
