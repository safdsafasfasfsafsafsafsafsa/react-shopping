import React from "react";
import "./ItemBlock.css";

export default function ItemBlock({ key, src, title, price }) {
  return (
    <div key={key} id={key} className="item-block">
      <img className="item-block__img" src={src} alt="img" />
      <p className="item-block__title">{title}</p>
      <div className="item-block-low">
        <button className="item-block__cart-btn">장바구니에 담기</button>
        <p className="item-block__price">${price}</p>
      </div>
    </div>
  );
}

/*
이미지 & 타이틀 클릭하면 detail/{id} 페이지로 이동

'https://fakestoreapi.com/products/{id}'
클릭한 상품의 id 찾기
*/
