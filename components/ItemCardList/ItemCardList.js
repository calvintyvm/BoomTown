import React, { Component } from "react";
import ItemCard from "../../components/ItemCard";

const ItemCardList = props => {
  return (
    <ul>
      {props.itemsData.map((items, index) => (
        <li>
          <ItemCard />
        </li>
      ))}
    </ul>
  );
};

export default ItemCardList;
