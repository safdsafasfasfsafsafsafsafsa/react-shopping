import Nav from "./components/Nav";
import MainPage from "./pages/MainPage/index";
import DetailPage from "./pages/DetailPage/index";
import CartPage from "./pages/CartPage/index";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth"; // 옵저버: 로그인 유지
import { auth } from "./firebase-config";
import { setUser, clearUser } from "./store/slices/authSlice";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 유저가 로그인 상태일 때: user 객체를 Redux 스토어에 저장
        dispatch(setUser(user));
        console.log("로그인 상태 유지:", user.email);
      } else {
        // 유저가 로그아웃 상태일 때: Redux 스토어의 유저 정보를 제거
        dispatch(clearUser());
        console.log("로그아웃 상태");
      }
    });

    // 컴포넌트가 언마운트될 때 리스너를 해제합니다.
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="detail" element={<Navigate to="/" replace />}></Route>
          <Route path="detail/:id" element={<DetailPage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
