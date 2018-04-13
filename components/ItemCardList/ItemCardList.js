import React, { Component } from "react";
import ItemCard from "../../components/ItemCard";

const ItemCardList = props => {
  return (
    <ul>
      {props.itemsData.map((item, index) => (
        <li key={index}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemCardList;
