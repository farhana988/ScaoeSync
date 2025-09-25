import { useState } from "react";
import { resendOtpService } from "../utils/resendOtpService";


const useResendOtp = (email) => {
  const [message, setMessage] = useState("");

  const handleResend = async () => {
    try {
      const result = await resendOtpService(email);
      if (result.ok) {
        setMessage("OTP resent to your email.");
      } else {
        setMessage(result.message || "Couldn't resend OTP.");
      }
    } catch (err) {
      setMessage("Network error.");
      console.log(err);
    }
  };

  return { message, handleResend };
};

export default useResendOtp;
