import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import ItemCardList from "../../components/ItemCardList";

const Items = props => {
  return (
    <div>
      <ItemCardList itemsData={props.itemsData} />
    </div>
  );
};

export default Items;
