import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import OTPInput from "../components/verify-otp/OTPInput";
import ActionBtn from "../components/buttons/ActionBtn";
import useOtpState from "../hooks/useOtpState";
import useVerifyOtp from "../hooks/useVerifyOtp";
import { FaSpinner } from "react-icons/fa6";
import BackBtn from "../components/buttons/BackBtn";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VerifyPasswordOtp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state || {};

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const { otp, inputRefs, handleChange, handleKeyDown } = useOtpState();

  const { loading, message } = useVerifyOtp(email, otp);

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
      setApiError("");

      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otp.join(""));

      const response = await fetch(`${BASE_URL}/forgot-verify-otp`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.status === 201) {
        navigate("/reset-password", {
          state: { email, token: result.data.token },
        });
      } else {
        setApiError(result.message || "Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      setApiError("Error occurred while verifying OTP");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <span className="font-medium">{email}</span>, please enter the code
          below to verify your email.
        </p>

        {/* OTP */}
        <OTPInput
          otp={otp}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputRefs={inputRefs}
        />
        {apiError && (
          <span className="text-red-500 text-sm mt-1 block mb-6">
            {apiError}
          </span>
        )}

        {message && (
          <p className="text-red-500 text-sm mt-1 block mb-6">{message}</p>
        )}
        <ActionBtn onClick={onSubmit} disabled={isSubmitting || loading}>
          {isSubmitting || loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Verify"
          )}
        </ActionBtn>
      </div>
    </div>
  );
};

export default VerifyPasswordOtp;
