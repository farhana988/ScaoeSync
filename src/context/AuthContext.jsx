
import { createContext, useState } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationEmail, setRegistrationEmail] = useState(null);

  return (
    <RegistrationContext.Provider value={{ registrationEmail, setRegistrationEmail }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
