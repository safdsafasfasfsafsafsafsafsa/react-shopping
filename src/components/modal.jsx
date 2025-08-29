import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./modal.css";

export default function Modal() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const newPrice = (items.price * items.amount).toFixed(2);
  const totalSpending = items.reduce(
    (acc, curr) => acc + Number(curr.price * curr.amount),
    0
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">modal</div>
    </div>
  );
}
