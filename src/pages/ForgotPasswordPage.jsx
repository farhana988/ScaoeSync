import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ReusableInput from "../components/shared/common/ReusableInput";
import ActionBtn from "../components/buttons/ActionBtn";
import BackBtn from "../components/buttons/BackBtn";
import { requestPasswordReset } from "../utils/forgotPasswordService";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const { success, message } = await requestPasswordReset(data.email);
      if (success) {
        console.log(message);
        navigate("/verify-password-otp", { state: { email: data.email } });
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred while sending OTP");
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
          Forgot your password?
        </h1>
        <p className="text-lGray mb-8">
          Please enter the email address associated with your account, and we'll
          email you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <ReusableInput
            label="Email"
            type="email"
            register={register}
            name="email"
            required={true}
            error={errors.email}
          />

          <ActionBtn type="submit" disabled={isSubmitting}>
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Verify"}
          </ActionBtn>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
