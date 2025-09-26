const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const requestPasswordReset = async (email) => {
  const formData = new FormData();
  formData.append("email", email);

  try {
    const response = await fetch(`${BASE_URL}/forgot-password`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);
    if (result.status === 201) {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: "Failed to send OTP" };
    }
  } catch (error) {
    console.error("Error occurred while sending OTP:", error);
    return { success: false, message: "Error occurred while sending OTP" };
  }
};
