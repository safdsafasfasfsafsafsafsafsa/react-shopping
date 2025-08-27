import LoginForm from "../../components/LoginForm";
import LoginRedirect from "../../components/LoginRedirect";

import "../../styles/Reset.css";
import "../../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <LoginRedirect />
      <section className="login-page centered">
        <LoginForm />
      </section>
    </>
  );
}
