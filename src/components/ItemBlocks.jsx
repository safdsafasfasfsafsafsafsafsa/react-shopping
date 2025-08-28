import React from "react";
import ItemBlock from "./itemBlock";
import "./ItemBlocks.css";
import { useSelector } from "react-redux";

export default function ItemBlocks() {
  const { filteredItems } = useSelector((state) => state.main);

  return (
    <section className="item-blocks">
      {filteredItems.map((item) => (
        <ItemBlock
          key={item.id}
          id={item.id}
          category={item.category}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
      {/* <div className="spacer"></div> */}
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
