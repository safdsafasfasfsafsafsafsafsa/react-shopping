import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function CartItems() {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="cart__items">
      {Array.isArray(items) && items.length > 0 ? (
        items.map(
          (item) =>
            items && (
              <CartItem
                key={item.id}
                id={item.id}
                category={item.category}
                image={item.image}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            )
        )
      ) : (
        <p>테스트</p>
      )}
    </div>
  );
}

/*
카트 배열 만들고 map으로 복제
*/
