import React from "react";

export default function CartItem() {
  return (
    <div key="" className="cart__item">
      <img className="cart__img" src="" alt="cart img" />
      <div className="cart-info">
        <p className="cart__category">category</p>
        <h2 className="cart__title">AAAAAAAAAAAAAAAAAAAAAA</h2>
        <h2 className="cart__price">$ 100.00 x 1 = $ 100.00</h2>
      </div>
      <div className="cart-count">
        <button className="cart-count__minus-btn block">-</button>
        <p className="cart-count__item block">1</p>
        <button className="cart-count__plus-btn block">+</button>
      </div>
      <img
        className="cart__icon-delete"
        src="/img/trash-can.svg"
        alt="delete"
      />
    </div>
  );
}

/*
[
  {
    image, category, title, price
    count=1
  }
]

카트 배열 가져와서 검색

/image
/category
/title
/price

물건 갯수는 카운터 연동. 1 아래로 안 내려가게.
모달에도 써야 하니까 배열 만들 때 1로 시작하도록 하는게 나을 듯
외부에서 합계 만들어야 하니까 전역set으로 보내기
*/
