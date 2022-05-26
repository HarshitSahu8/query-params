import { useLocation } from "react-router-dom";

const useSearchLocation = () => {
  const search = useLocation().search;
  const userData = Object.fromEntries(new URLSearchParams(search.toString()));
  return userData;
};

export default useSearchLocation;
