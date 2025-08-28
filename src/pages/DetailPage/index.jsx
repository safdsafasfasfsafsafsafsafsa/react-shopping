import React, { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/asyncTrunks/productsTrunks";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { addToCart } from "../../store/asyncTrunks/cartsTrunks";

import "../../styles/Reset.css";
import "../../styles/DetailPage.css";

export default function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { checkAuthAndRedirect } = useAuthCheck();

  const { itemById, status } = useSelector((state) => state.id);
  const { items } = useSelector((state) => state.cart);

  const handleClick = () => {
    if (checkAuthAndRedirect()) {
      navigate(`/cart`);
    }
  };

  const handleAddToCart = () => {
    if (checkAuthAndRedirect()) {
      const cartItem = {
        id: itemById.id,
        category: itemById.category,
        image: itemById.image,
        title: itemById.title,
        price: itemById.price,
        // 초기 수량은 trunk 계산으로
      };
      dispatch(addToCart(cartItem));
      alert("장바구니에 상품을 추가했습니다");
      console.log("cart:", items);
    }
  };

  useEffect(() => {
    dispatch(fetchProductById(params.id));
    // console.log("id", params.id);
  }, [dispatch]);

  if (status === "loading") {
    return (
      <>
        <section className="detail-page centered">
          <LoadingSpinner />
        </section>
      </>
    );
  }

  return (
    <>
      <section className="detail-page centered">
        <img className="detail__img" src={itemById.image} alt="detail img" />
        <div className="detail-right">
          <p className="detail__category">{itemById.category}</p>
          <h2 className="detail__title">{itemById.title}</h2>
          <h2 className="detail__price">$ {itemById.price}</h2>
          <p className="detail__description">{itemById.description}</p>
          <div className="detail-button">
            <button className="detail__btn insert" onClick={handleAddToCart}>
              장바구니에 담기
            </button>
            <button className="detail__btn redirect" onClick={handleClick}>
              장바구니로 이동
            </button>
          </div>
        </div>
      </section>
      <div className="padding"></div>
    </>
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
