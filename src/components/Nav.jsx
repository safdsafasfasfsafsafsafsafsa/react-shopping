import React from "react";
import "../styles/Reset.css";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(`/login`);
  };

  const handlePageReload = () => {
    window.location.href = "/";
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
          onClick={handlePageReload}
        />
        <img
          src="/img/login.svg"
          alt="login"
          className="nav__log-in-out"
          onClick={handleClickLogin}
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
