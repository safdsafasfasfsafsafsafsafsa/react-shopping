import React from "react";
import ItemBlock from "./itemBlock";
import "./ItemBlocks.css";

export default function ItemBlocks() {
  return (
    <section className="item-blocks">
      <ItemBlock />
      <ItemBlock />
      <ItemBlock />
      <ItemBlock />
      <ItemBlock />
      <ItemBlock />
      <ItemBlock />
      <ItemBlock />
    </section>
  );
}

/* 
category에 따라 map 조건 바꾸면 if는 필요 없을 듯

all(category 굳이 안 줘도 될 듯)
"electronics"
"jewelery"
"men's clothing"
"women's clothing"
*/
