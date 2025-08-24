import React from "react";
import styled from "styled-components";

export default function LoadingSpinner() {
  return <Loading>Loading...</Loading>;
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

/*
setLoading: 데이터 로딩 끝나면 화면 출력되도록
*/
