import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuthCheck = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // 로그인 상태를 체크하고, 로그인 상태가 아니면 로그인 페이지로 이동시킵니다.
  const checkAuthAndRedirect = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return false;
    }
    return true;
  };

  return { checkAuthAndRedirect, user };
};

// 페이지 자체적으로 auth 검증하려면? App에서 작업해야하는지
