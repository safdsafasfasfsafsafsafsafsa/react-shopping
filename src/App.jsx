import Nav from "./components/Nav";
import MainPage from "./pages/MainPage/index";
import DetailPage from "./pages/DetailPage/index";
import CartPage from "./pages/CartPage/index";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";
import "./App.css";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // 옵저버: 로그인 유지
import { auth } from "./firebase-config";
import AuthCheck from "./components/AuthCheck";
import { setUser, clearUser } from "./store/slices/authSlice";
import { fetchCart } from "./store/asyncTrunks/cartsTrunks";

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
  const { user, isAuthReady } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.cart);

  const timeoutRef = useRef(null);
  const logoutTimeout = 1000 * 60 * 30; // 30분

  // + 로그인 타임 아웃
  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (user) {
        dispatch(clearUser());
        auth.signOut(); // Firebase 로그아웃
        alert("자동으로 로그아웃");
      }
    }, logoutTimeout);
  };

  useEffect(() => {
    // 마우스, 키보드 활동 감지
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      clearTimeout(timeoutRef.current);
    };
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // 로그인 시 타이머 시작
        resetTimer();
      } else {
        // 로그아웃 시 타이머 제거
        clearTimeout(timeoutRef.current);
      }
    });
  }, []);

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

  // + 접속 시 firebase 카트 -> 로컬 카트 동기화
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        // 로그인 시 장바구니 데이터 동기화
        dispatch(fetchCart());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (!isAuthReady && status === "loading") {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="detail" element={<Navigate to="/" replace />}></Route>
          <Route path="detail/:id" element={<DetailPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route element={<AuthCheck />}>
            <Route path="cart" element={<CartPage />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  );
}
