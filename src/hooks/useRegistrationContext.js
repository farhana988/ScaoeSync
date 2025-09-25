
import { useContext } from "react";
import RegistrationContext from "../context/AuthContext";


const useRegistrationContext = () => {
  return useContext(RegistrationContext);
};

export default useRegistrationContext;
