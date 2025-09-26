import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ReusableInput from "../components/shared/common/ReusableInput";
import ActionBtn from "../components/buttons/ActionBtn";
import BackBtn from "../components/buttons/BackBtn";
import { requestPasswordReset } from "../utils/forgotPasswordService";
import { FaSpinner } from "react-icons/fa";

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const { success, message } = await requestPasswordReset(data.email);
      if (success) {
        console.log(message, success);
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
    <div className="pt-60  max-w-[480px] mx-auto">
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
          watchValue={watch("email", "")}
        />

        <ActionBtn type="submit" disabled={isSubmitting}>
          {isSubmitting ? <FaSpinner className="animate-spin" /> : "Reset Password"}
        </ActionBtn>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
