import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthCheck = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthCheck;
