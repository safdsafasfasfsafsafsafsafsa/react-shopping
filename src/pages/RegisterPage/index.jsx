// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "../../api/axios";
// import Submit from "../../components/Submit";
// import LoadingSpinner from "../../components/LoadingSpinner";

import "../../styles/Reset.css";
// import "../../styles/PageLayout.css";

export default function RegisterPage() {
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

  return (
    <div>
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
      reg
    </div>
  );
}
