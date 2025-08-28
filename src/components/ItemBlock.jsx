import React from "react";
import "./ItemBlock.css";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/asyncTrunks/cartsTrunks";

export default function ItemBlock({ key, id, category, image, title, price }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { checkAuthAndRedirect } = useAuthCheck();

  const { items } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    if (checkAuthAndRedirect()) {
      const cartItem = {
        id: id,
        category: category,
        image: image,
        title: title,
        price: price,
        amount: 1, // 초기 수량
      };
      dispatch(addToCart(cartItem));
      alert("장바구니에 상품을 추가했습니다");
      console.log("cart:", items);
    }
  };

  const handleNav = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <div key={key} id={id} className="item-block">
      <img
        className="item-block__img"
        src={image}
        alt="img"
        onClick={() => handleNav(id)}
      />
      <p className="item-block__title" onClick={() => handleNav(id)}>
        {title}
      </p>
      <div className="item-block-low">
        <button className="item-block__cart-btn" onClick={handleAddToCart}>
          장바구니에 담기
        </button>
        <p className="item-block__price">${price}</p>
      </div>
    </div>
  );
}

/*
이미지 & 타이틀 클릭하면 detail/{id} 페이지로 이동

'https://fakestoreapi.com/products/{id}'
클릭한 상품의 id 찾기

id, image, category, title, price, amount(추가)
*/
