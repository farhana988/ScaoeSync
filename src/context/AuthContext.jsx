import { createContext, useEffect, useState } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationEmail, setRegistrationEmail] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    const storedEmail = localStorage.getItem("registration_email");

    if (storedToken && storedEmail) {
      setRegistrationEmail(storedEmail);
    }
  }, []);
  return (
    <RegistrationContext.Provider
      value={{ registrationEmail, setRegistrationEmail }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
