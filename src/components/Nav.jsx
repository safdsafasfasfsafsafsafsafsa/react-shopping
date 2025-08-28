import React from "react";
import "../styles/Reset.css";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/slices/authSlice";
import { logoutUser } from "../store/asyncTrunks/loginTrunks";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";

export default function Nav() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  const { checkAuthAndRedirect } = useAuthCheck();

  const handleNav = (nav) => {
    if (nav === "cart") {
      checkAuthAndRedirect();
      return;
    }
    navigate(`/${nav}`);
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
        onClick={() => handleNav("")}
      />
      <div className="img-right">
        {status === "succeeded" ? (
          <p className="nav__login-email">{user.email}</p>
        ) : (
          <></>
        )}
        <img
          src="/img/cart.svg"
          alt="cart"
          className="nav__cart"
          onClick={() => handleNav("cart")}
        />
        <img
          src="/img/person.svg"
          alt="person"
          className="nav__person"
          onClick={() => handleNav("login")}
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
