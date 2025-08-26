import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import LoadingSpinner from "../../components/LoadingSpinner";

import "../../styles/Reset.css";
import "../../styles/MainPage.css";
import ItemBlocks from "../../components/ItemBlocks";
import { setFilteredProducts } from "../../store/slices/mainSilce";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/asyncTrunks/productsTrunks";

export default function MainPage() {
  const dispatch = useDispatch();

  // ❤ 리덕스 연결 필수 요소
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleFilterClick = (category) => {
    // ⭐️ 버튼 클릭 시 해당 카테고리명을 payload로 전달
    dispatch(setFilteredProducts(category));
  };

  return (
    <section className="main-page centered">
      {/* {loading && <LoadingSpinner />}
      {!loading && (
        <>
          <section className="main-page centered">
            <h1 className="title-h1">Insert music file</h1>
            <h2 className="title-h2">mp3, wav etc</h2>
            <Submit nav="analyze" />
          </section>
        </>
      )} */}
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
      <div>
        <p className="main__showing-text">Showing: 0 items</p>
        <ItemBlocks />
      </div>
    </section>
  );
}

/*
버튼 누르면 set 변경 이벤트로 카테고리 분기: setCategory
*/
