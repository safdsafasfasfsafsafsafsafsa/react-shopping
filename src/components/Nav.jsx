import React from "react";
import "../styles/Reset.css";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/slices/authSlice";
import { logoutUser } from "../store/asyncTrunks/loginTrunks";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const handlePageReload = () => {
    window.location.href = "/";
  };

  const handleClickLogin = () => {
    navigate(`/login`);
  };

  const handleClickLogout = () => {
    if (status === "succeeded") {
      dispatch(logoutUser());
      dispatch(clearUser());
    }
  };

  return (
    <nav className="nav">
      <img
        src="/img/logo.png"
        alt="shop logo"
        className="nav__logo"
        onClick={handlePageReload}
      />
      <div className="img-right">
        <img
          src="/img/cart.svg"
          alt="cart"
          className="nav__cart"
          onClick={handlePageReload}
        />
        <img
          src="/img/person.svg"
          alt="person"
          className="nav__person"
          onClick={handleClickLogin}
        />
        <img
          src="/img/login.svg"
          alt="login"
          className="nav__log-in-out"
          onClick={handleClickLogout}
        />
      </div>
    </nav>
  );
}

/*
외부에서 장바구니 추가 버튼 누르면 숫자 표시
카트 버튼을 누르면 isModal으로 장바구니 띄우기

로그인 상태에 따라 login 로고 분기
*/
