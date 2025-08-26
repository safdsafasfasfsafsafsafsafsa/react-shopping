// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "../../api/axios";
// import Submit from "../../components/Submit";
// import LoadingSpinner from "../../components/LoadingSpinner";

import "../../styles/Reset.css";
import "../../styles/DetailPage.css";

export default function DetailPage() {
  // const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  // const { file } = useContext(FileContext);

  // useEffect(() => {
  //   if (file) {
  //     console.log("file:", file);
  //     console.log("typeof file:", typeof file);
  //     console.log("file instanceof File:", file instanceof File); // true 여야 제대로 작동
  //     fetchData(file);
  //   }
  // }, [file]);

  // const fetchData = async (newFile) => {
  //   const formData = new FormData();
  //   formData.append("file", newFile);

  //   try {
  //     setLoading(true);
  //     console.log("loading...1");

  //     const response = await axios.post("/analyze", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log(response.data);
  //     console.log("loading...2");

  //     const resultData = response.data;

  //     navigate(`/analyze`, { state: { result: resultData } });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     console.error("upload error:", error.response?.data || error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (status === "loading") {
    return (
      <section className="detail-page centered">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="detail-page centered">
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
      <img className="detail__img" src="" alt="detail img" />
      <div className="detail-right">
        <p className="detail__category">category</p>
        <h2 className="detail__title">AAAAAAAAAAAAAAAAAAAAAA</h2>
        <h2 className="detail__price">$ 100.00</h2>
        <p className="detail__description">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssssss
        </p>
        <div className="detail-button">
          <button className="detail__btn insert">장바구니에 담기</button>
          <button className="detail__btn redirect">장바구니로 이동</button>
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
