import React from "react";
import "./ItemBlock.css";

export default function ItemBlock() {
  return (
    <>
      <div className="item-block">
        <img src="" alt="img" />
        <p>title</p>
        <div className="item-block__low">
          <button>장바구니에 담기</button>
          <p>$10</p>
        </div>
      </div>
    </>
  );
}
