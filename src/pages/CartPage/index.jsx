// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "../../api/axios";
// import Submit from "../../components/Submit";
// import LoadingSpinner from "../../components/LoadingSpinner";

import "../../styles/Reset.css";
import "../../styles/CartPage.css";

export default function CartPage() {
  // const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  // const { file } = useContext(FileContext);

  // useEffect(() => {
  //   if (file) {
  //     console.log("file:", file);
  //     console.log("typeof file:", typeof file);
  //     console.log("file instanceof File:", file instanceof File); // true 여야 제대로 작동
  //     fetchData(file);
  //   }
  // }, [file]);

  // const fetchData = async (newFile) => {
  //   const formData = new FormData();
  //   formData.append("file", newFile);

  //   try {
  //     setLoading(true);
  //     console.log("loading...1");

  //     const response = await axios.post("/analyze", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log(response.data);
  //     console.log("loading...2");

  //     const resultData = response.data;

  //     navigate(`/analyze`, { state: { result: resultData } });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     console.error("upload error:", error.response?.data || error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="cart-page centered">
      <img src="/img/cart.png" alt="empty cart" />
      <h2>장바구니가 비어있습니다.</h2>
      <a href="/">계속 쇼핑하기</a>
    </section>
    // <section className="cart-page centered">
    //   <h1 className="cart-h1">장바구니</h1>
    //   <div className="cart__items">
    //     <div className="cart__item">
    //       <img className="cart__img" src="" alt="cart img" />
    //       <div className="cart-info">
    //         <p className="cart__category">category</p>
    //         <h2 className="cart__title">AAAAAAAAAAAAAAAAAAAAAA</h2>
    //         <h2 className="cart__price">$ 100.00 x 1 = $ 100.00</h2>
    //       </div>
    //       <div className="cart-count">
    //         <button className="cart-count__minus-btn block">-</button>
    //         <p className="cart-count__item block">1</p>
    //         <button className="cart-count__plus-btn block">+</button>
    //       </div>
    //       <img
    //         className="cart__icon-delete"
    //         src="/img/trash-can.svg"
    //         alt="delete"
    //       />
    //     </div>
    //   </div>
    //   <div className="cart-result">
    //     <p className="cart-result__sum">합계: $ 100.00</p>
    //     <button className="cart-result__btn">계산하기</button>
    //   </div>
    // </section>
  );
}

/*
장바구니는 해당 객체를 새로운 배열에 추가하는 방식?

컴포넌트 분리: CartItems - CartItem

비어있을 때: 계속 쇼핑하기 누르면 메인 화면으로
있으면: map으로 컴포넌트 여러개 출력, 갯수 setCount, 버리기 버튼으로 배열 제외, 합계 더하기

구현하면 헤더 모달에도 재사용 가능할 듯, 갯수 조정 빼면 동일
*/
