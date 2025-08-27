import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginRedirect = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    // ⭐️ user 객체가 존재하면(로그인 성공)
    if (user) {
      console.log("로그인 성공! 메인 페이지로 이동합니다.");
      navigate("/");
    }
  }, [user, navigate]);

  // 이 컴포넌트는 UI를 렌더링하지 않습니다.
  return null;
};

export default LoginRedirect;
