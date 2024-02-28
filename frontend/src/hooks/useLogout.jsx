import { useAuthContext } from "./useAuthContext.jsx";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("admin");

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
