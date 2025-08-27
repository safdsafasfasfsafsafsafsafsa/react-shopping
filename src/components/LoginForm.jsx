import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/asyncTrunks/loginTrunks";

export default function LoginForm() {
  // 지역 한정 정보는 setState 사용?
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ⭐️ dispatch를 통해 Thunk를 호출하고 이메일, 비밀번호를 전달합니다.
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="login-box">
      <h2>로그인</h2>
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
          {status === "loading" ? "로그인 중..." : "로그인"}
        </button>
        {status === "succeeded" ? "성공" : "실패"}
        {error && <p>{error}</p>}
      </form>
      <div className="login__register">
        <a href="">가입하기</a>
      </div>
    </div>
  );
}
