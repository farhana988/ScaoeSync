import { useEffect } from "react";
import { useNavigate } from "react-router";
import useRegistrationContext from "../hooks/useRegistrationContext";
import { FaChevronLeft, FaSpinner } from "react-icons/fa6";
import ActionBtn from "../components/buttons/ActionBtn";
import OTPInput from "../components/verify-otp/OTPInput";
import useOtpState from "../hooks/useOtpState";
import useVerifyOtp from "../hooks/useVerifyOtp";
import useResendOtp from "../hooks/useResendOtp";

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
      <div className="w-full max-w-md p-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#49AE44] text-sm font-medium mb-6 gap-2
          text-[13px]"
        >
          <FaChevronLeft />
          Back
        </button>

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

        {message && (
          <p className="mt-6 text-center text-sm text-lGray">{message}</p>
        )}
        {resendMessage && (
          <p className="mt-6 text-center text-sm text-lGray">{resendMessage}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;
