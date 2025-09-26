import { useEffect } from "react";
import { useNavigate } from "react-router";
import useRegistrationContext from "../hooks/useRegistrationContext";
import { FaSpinner } from "react-icons/fa6";
import ActionBtn from "../components/buttons/ActionBtn";
import OTPInput from "../components/verify-otp/OTPInput";
import useOtpState from "../hooks/useOtpState";
import useVerifyOtp from "../hooks/useVerifyOtp";
import useResendOtp from "../hooks/useResendOtp";
import BackBtn from "../components/buttons/BackBtn";

const VerifyOtp = () => {
  const { registrationEmail } = useRegistrationContext();
  const navigate = useNavigate();

  const { otp, inputRefs, handleChange, handleKeyDown } = useOtpState();
  const { loading, message, handleVerify } = useVerifyOtp(
    registrationEmail,
    otp
  );
  const { message: resendMessage, handleResend } =
    useResendOtp(registrationEmail);

  useEffect(() => {
    if (!registrationEmail) {
      navigate("/register");
    }
  }, [registrationEmail, navigate]);

  return (
    <div className="flex items-center justify-center bg-white pt-60">
      <div className="w-full max-w-[480px]">
        {/* Back */}
        <BackBtn />

        <h1 className="text-[32px] font-bold text-dGray mb-4">
          Please check your email!
        </h1>
        <p className="text-lGray mb-8">
          We’ve emailed a 6-digit confirmation code to{" "}
          <span className="font-medium">{registrationEmail}</span>, please enter
          the code below to verify your email.
        </p>

        {/* OTP */}
        <OTPInput
          otp={otp}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputRefs={inputRefs}
        />

        {message && (
          <p className="text-red-500 text-sm mt-1 block mb-6">{message}</p>
        )}
        {resendMessage && (
          <p className="text-red-500 text-sm mt-1 block mb-6">
            {resendMessage}
          </p>
        )}
        <ActionBtn onClick={handleVerify} disabled={loading}>
          {loading ? <FaSpinner className="animate-spin" /> : "Verify"}
        </ActionBtn>

        <p className="text-center text-sm text-dGray mt-6">
          Don’t have a code?{" "}
          <button
            onClick={handleResend}
            className="text-green-700 font-medium hover:underline"
          >
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
