import React from "react";
import "./ItemBlock.css";
import { useNavigate } from "react-router-dom";

export default function ItemBlock({ key, id, src, title, price }) {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <div key={key} id={id} className="item-block">
      <img
        className="item-block__img"
        src={src}
        alt="img"
        onClick={() => handleClick(id)}
      />
      <p className="item-block__title" onClick={() => handleClick(id)}>
        {title}
      </p>
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
