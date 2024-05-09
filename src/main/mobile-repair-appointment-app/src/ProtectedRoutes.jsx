import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: sessionStorage.getItem("login") };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
