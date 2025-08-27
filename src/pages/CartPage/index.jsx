import React from "react";
// import { useDispatch } from "react-redux";

import CartItems from "../../components/CartItems";
import "../../styles/Reset.css";
import "../../styles/CartPage.css";

export default function CartPage() {
  return (
    // <section className="cart-page centered">
    //   <img src="/img/cart.png" alt="empty cart" />
    //   <h2>장바구니가 비어있습니다.</h2>
    //   <a href="/">계속 쇼핑하기</a>
    // </section>
    <section className="cart-page centered">
      <h1 className="cart-h1">장바구니</h1>
      <CartItems />
      <div className="cart-result">
        <p className="cart-result__sum">합계: $ 100.00</p>
        <button className="cart-result__btn">계산하기</button>
      </div>
    </section>
  );
}

/*
장바구니는 해당 객체를 새로운 배열에 추가하는 방식?
배열이 null일 때 분기

컴포넌트 분리: CartItems - CartItem

비어있을 때: 계속 쇼핑하기 누르면 메인 화면으로
있으면: map으로 컴포넌트 여러개 출력, 갯수 setCount, 버리기 버튼으로 배열 제외, 합계 더하기

구현하면 헤더 모달에도 재사용 가능할 듯, 갯수 조정 빼면 동일

합계: 전역set 만든거 가져오기
*/
