import React from "react";
import ItemCard from "../../components/ItemCard";
import PropTypes from "prop-types";

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

ItemCardList.propTypes = {
  itemsData: PropTypes.array.isRequired
};
