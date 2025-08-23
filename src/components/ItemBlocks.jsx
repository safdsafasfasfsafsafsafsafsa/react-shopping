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
    </section>
  );
}
