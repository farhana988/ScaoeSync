import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router";
import ReusableInput from "../components/shared/common/ReusableInput";
import { FaSpinner } from "react-icons/fa6";
import ActionBtn from "../components/buttons/ActionBtn";
import BackBtn from "../components/buttons/BackBtn";
import { resetPassword } from "../utils/resetpass";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = location.state || {};

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const { success, message } = await resetPassword(token, data);
      if (success) {
        navigate("/reset-password-confirm");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Error occurred while resetting password:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white pt-60">
      <div className="w-full max-w-[480px]">
        <BackBtn />
        <h1 className="text-[32px] font-bold text-dGray mb-4">
          Enter your new password
        </h1>
        <p className="text-lGray mb-8">
          Please enter the email address associated with your account, and we'll
          email you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <ReusableInput
            label="New Password"
            type="password"
            register={register}
            name="password"
            required={true}
            error={errors.password}
             showToggle={true}
            showValue={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            watchValue={watch("password", "")}
          />

          <ReusableInput
            label="Confirm New Password"
            type="password"
            register={register}
            name="password_confirmation"
            required={true}
            validate={(val) =>
              val === watch("password") || "Passwords do not match"
            }
            showToggle={true}
            showValue={showConfirm}
            onToggle={() => setShowConfirm(!showConfirm)}
            error={errors.password_confirmation}
            watchValue={watch("password_confirmation", "")}
          />

          <ActionBtn type="submit" disabled={isSubmitting}>
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Update Password"}
          </ActionBtn>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
