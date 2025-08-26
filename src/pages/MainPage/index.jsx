import React, { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

import "../../styles/Reset.css";
import "../../styles/MainPage.css";
import ItemBlocks from "../../components/ItemBlocks";
import { setFilteredProducts } from "../../store/slices/mainSilce";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/asyncTrunks/productsTrunks";

export default function MainPage() {
  const dispatch = useDispatch();

  const { filteredLength, status } = useSelector((state) => state.main);

  // ❤ 리덕스 연결 필수 요소
  useEffect(() => {
    dispatch(fetchAllProducts());
    console.log("main");
  }, [dispatch]);

  const handleFilterClick = (category) => {
    // ⭐️ 버튼 클릭 시 해당 카테고리명을 payload로 전달
    dispatch(setFilteredProducts(category));
  };

  if (status === "loading") {
    return (
      <section className="main-page centered">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="main-page centered">
      <h1 className="main-h1">Products</h1>
      <div>
        <button
          className="main__menu-btn"
          onClick={() => handleFilterClick("all")}
        >
          모두
        </button>
        <button
          className="main__menu-btn"
          onClick={() => handleFilterClick("electronics")}
        >
          전자기기
        </button>
        <button
          className="main__menu-btn"
          onClick={() => handleFilterClick("jewelery")}
        >
          쥬얼리
        </button>
        <button
          className="main__menu-btn"
          onClick={() => handleFilterClick("men's clothing")}
        >
          남성의류
        </button>
        <button
          className="main__menu-btn"
          onClick={() => handleFilterClick("women's clothing")}
        >
          여성의류
        </button>
      </div>
      <div className="main-products">
        <p className="main__showing-text">Showing: {filteredLength} items</p>
        <ItemBlocks />
      </div>
      <div className="padding"></div>
    </section>
  );
}

/*
버튼 누르면 set 변경 이벤트로 카테고리 분기: setCategory
*/
