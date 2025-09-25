import React from 'react';
import ReusableInput from '../shared/common/ReusableInput';

const FormFields = ({
  isRegister,
  register,
  errors,
  watch,
  showPassword,
  setShowPassword,
  showConfirm,
  setShowConfirm,
})=> {
    return (
          <>
        {isRegister && (
        <div className="grid grid-cols-2 gap-4">
          <ReusableInput
            label="First name"
            register={register}
            name="firstName"
            required={true}
            error={errors.firstName}
            watchValue={watch("firstName", "")}
          />
          <ReusableInput
            label="Last name"
            register={register}
            name="lastName"
            required={true}
            error={errors.lastName}
            watchValue={watch("lastName", "")}
          />
        </div>
      )}

      <ReusableInput
        label="Email"
        type="email"
        register={register}
        name="email"
        required={true}
        error={errors.email}
        watchValue={watch("email", "")}
      />

      <ReusableInput
        label="Password"
        register={register}
        name="password"
        required={true}
        showToggle={true}
        showValue={showPassword}
        onToggle={() => setShowPassword(!showPassword)}
        error={errors.password}
        watchValue={watch("password", "")}
      />

      {isRegister && (
        <ReusableInput
          label="Confirm Password"
          register={register}
          name="confirmPassword"
          required={true}
          validate={(val) =>
            val === watch("password") || "Passwords do not match"
          }
          showToggle={true}
          showValue={showConfirm}
          onToggle={() => setShowConfirm(!showConfirm)}
          error={errors.confirmPassword}
          watchValue={watch("confirmPassword", "")}
        />
      )}

      {isRegister ? (
        <div className="flex flex-col">
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register("agree", { required: true })}
              className="mr-2 mt-1 h-[18px] w-[18px] accent-green-600 
               focus:ring-green-500 border-gray-300 rounded"
            />
            <p className="text-sm text-dGray">
              I agree to Tech Takes{" "}
              <a href="#" className="underline-offset-4 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline-offset-4 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          {errors.agree && (
            <span className="text-red-500 text-sm mt-1">
              You must agree to the terms and conditions.
            </span>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between text-sm text-dGray">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("remember")}
              className="mr-2 h-[16px] w-[16px] accent-green-600 border-gray-300 rounded"
            />
            Remember me
          </label>
          <a
            href="/forgot-password"
            className="text-[#49AE44] hover:underline hover:underline-offset-4 
            font-semibold"
          >
            Forgot password?
          </a>
        </div>
      )}
    </>
    );
};

export default FormFields;