import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../store/asyncTrunks/loginTrunks";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleClick = () => {
    navigate(`/login`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupUser({ email, password }));
  };

  return (
    <div className="login-box">
      <h2>가입하기</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="login__email login-form"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__pw login-form"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login__submit"
          type="submit"
          value="로그인"
          disabled={status === "loading"}
        >
          {status === "loading" ? "진행 중..." : "가입하기"}
        </button>
        {/* {status === "succeeded" ? "성공" : "실패"} */}
        {error && <p>{error}</p>}
      </form>
      <div className="login__register">
        <p onClick={handleClick}>로그인하기</p>
      </div>
    </div>
  );
}
