import { useLocation } from "react-router";

const useIsHomepage = () => {
  const location = useLocation();
  return location.pathname === "/";
};

export default useIsHomepage;
