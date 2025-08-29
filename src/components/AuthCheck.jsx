import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthCheck = () => {
  const { user, isAuthReady } = useSelector((state) => state.auth);

  if (!isAuthReady) {
    return user ? <Outlet /> : <div>로그인 상태를 확인 중입니다...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthCheck;
