import React from "react";
import CartItem from "./CartItem";

export default function CartItems() {
  return (
    <div className="cart__items">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

/*
카트 배열 만들고 map으로 복제
*/
