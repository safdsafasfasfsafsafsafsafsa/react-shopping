import React from "react";
import "./modal.css";
import CartItemToModal from "./CartItemToModal";
import { useDispatch, useSelector } from "react-redux";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const { checkAuthAndRedirect } = useAuthCheck();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const totalSpending = items.reduce(
    (acc, curr) => acc + Number(curr.price * curr.amount),
    0
  );

  const handleClick = () => {
    const check = checkAuthAndRedirect();
    if (check) {
      navigate(`/cart`);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {Array.isArray(items) && items.length > 0 ? (
          items.map(
            (item) =>
              items && (
                <CartItemToModal
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
        <div className="modal-total">
          <p>합계: $ {totalSpending}</p>
        </div>
        <div className="modal-redirect">
          <p onClick={handleClick}>장바구니로 이동</p>
        </div>
      </div>
    </div>
  );
}
