const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const verifyOtpService = async (email, otp) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("otp", otp);

  const response = await fetch(`${BASE_URL}/verify_otp`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  return { ok: response.ok, message: result.message };
};
