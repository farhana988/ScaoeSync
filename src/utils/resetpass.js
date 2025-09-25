const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const resetPassword = async (token, data) => {
  const formData = new FormData();
  formData.append("token", token);
  formData.append("password_confirmation", data.password_confirmation);
  formData.append("password", data.password);

  try {
    const response = await fetch(`${BASE_URL}/reset-password`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.status === 200) {
      return {
        success: true,
        message: result.message || "Password reset successfully.",
      };
    } else {
      return {
        success: false,
        message: result.message || "Password reset failed.",
      };
    }
  } catch (error) {
    console.error("Error occurred while resetting password:", error);
    return {
      success: false,
      message: "An error occurred while resetting your password.",
    };
  }
};
