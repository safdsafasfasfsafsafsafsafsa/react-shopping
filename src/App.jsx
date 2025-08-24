import Nav from "./components/Nav";
import MainPage from "./pages/MainPage/index";
import DetailPage from "./pages/DetailPage/index";
import CartPage from "./pages/CartPage/index";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";
import { Outlet, Routes, Route } from "react-router-dom";
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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="detail" element={<DetailPage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
