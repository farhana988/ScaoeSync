import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import useRegistrationContext from "./useRegistrationContext";

const useAuth = (type) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const { setRegistrationEmail } = useRegistrationContext();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isRegister = type === "register";

  const buildFormData = (data) => {
    const formData = new FormData();

    if (isRegister) {
      formData.append("first_name", data.firstName);
      formData.append("last_name", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmPassword);
      formData.append("terms", data.agree ? "true" : "false");
    } else {
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("remember_me", data.remember ? "true" : "false");
    }

    return formData;
  };
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const onSubmit = async (data) => {
    const endpoint = isRegister ? `${BASE_URL}/register` : `${BASE_URL}/login`;

    const formData = buildFormData(data);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("✅ Success:", result);
        if (isRegister) {
          setRegistrationEmail(data.email);
          navigate("/verify-otp");
        } else {
          localStorage.setItem("auth_token", result.token);
          localStorage.setItem("registration_email", data.email);
          navigate("/");
        }
      } else {
        handleServerErrors(result);
      }
    } catch (error) {
      console.error("⚠️ Network Error:", error);
      setError("email", {
        type: "server",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const handleServerErrors = (result) => {
    if (result.errors) {
      for (const field in result.errors) {
        setError(field, {
          type: "server",
          message: result.errors[field][0],
        });
      }
    } else if (result.message) {
      setError("email", {
        type: "server",
        message: result.message,
      });
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    isRegister,
    showPassword,
    setShowPassword,
    showConfirm,
    setShowConfirm,
  };
};

export default useAuth;
