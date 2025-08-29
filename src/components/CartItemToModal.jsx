import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/asyncTrunks/cartsTrunks";

export default function CartItemToModal({
  key,
  id,
  category,
  image,
  title,
  price,
  amount,
}) {
  const dispatch = useDispatch();

  const newPrice = (price * amount).toFixed(2);

  const handleDeleteCart = () => {
    dispatch(clearCart(id));
  };

  return (
    <div key={key} id={id} className="modal__item">
      <div className="modal-left">
        <img className="modal__img" src={image} alt="modal img" />
      </div>
      <div className="modal-info">
        <p className="modal__category">{category}</p>
        <h2 className="modal__title">{title}</h2>
        <p className="modal__price">
          $ {price} x {amount} = $ {newPrice}
        </p>
      </div>
      <img
        className="modal__icon-delete"
        src="/img/trash-can.svg"
        alt="delete"
        onClick={handleDeleteCart}
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
