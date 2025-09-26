import { useEffect, useState } from "react";

const useLogout = (setRegistrationEmail) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("registration_email");
    const storedToken = localStorage.getItem("auth_token");

    if (storedToken && storedEmail) {
      setRegistrationEmail(storedEmail);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [setRegistrationEmail]);

  return isLoggedIn;
};

export default useLogout;
