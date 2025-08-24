// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../api/axios";
// import LoadingSpinner from "../../components/LoadingSpinner";

import "../../styles/Reset.css";
import "../../styles/MainPage.css";
import ItemBlocks from "../../components/ItemBlocks";

export default function MainPage() {
  // const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);

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
        <button className="main__menu-btn">모두</button>
        <button className="main__menu-btn">전자기기</button>
        <button className="main__menu-btn">쥬얼리</button>
        <button className="main__menu-btn">남성의류</button>
        <button className="main__menu-btn">여성의류</button>
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
