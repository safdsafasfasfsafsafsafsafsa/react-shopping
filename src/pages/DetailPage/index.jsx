import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/asyncTrunks/productsTrunks";

import "../../styles/Reset.css";
import "../../styles/DetailPage.css";

export default function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { itemById } = useSelector((state) => state.id);

  const handleClick = () => {
    navigate(`/cart`);
  };

  useEffect(() => {
    dispatch(fetchProductById(params.id));
    console.log("id", params.id);
  }, [dispatch]);

  return (
    <section className="detail-page centered">
      <img className="detail__img" src={itemById.image} alt="detail img" />
      <div className="detail-right">
        <p className="detail__category">{itemById.category}</p>
        <h2 className="detail__title">{itemById.title}</h2>
        <h2 className="detail__price">$ {itemById.price}</h2>
        <p className="detail__description">{itemById.description}</p>
        <div className="detail-button">
          <button className="detail__btn insert">장바구니에 담기</button>
          <button className="detail__btn redirect" onClick={handleClick}>
            장바구니로 이동
          </button>
        </div>
      </div>
    </section>
  );
}

/*
'https://fakestoreapi.com/products/{id}'

/image
/category
/title
/price
/description

장바구니 담기: set으로 한 번만, 이미 장바구니에 있으면 모달 띄우기
장바구니 이동: cart로 이동
*/
