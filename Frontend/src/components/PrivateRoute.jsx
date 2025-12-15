import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { memo } from "react";

const PrivateRoute = () => {
  const { isAuthenticated, authChecked } = useSelector(
    (state) => state.auth
  );

  if (!authChecked) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default memo(PrivateRoute);
