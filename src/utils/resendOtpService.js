const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const resendOtpService = async (email) => {
  const formData = new FormData();
  formData.append("email", email);

  const response = await fetch(`${BASE_URL}/resend_otp`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  return { ok: response.ok, message: result.message };
};
