import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import "./styles.css";

const style = {
  margin: 12
};

const ItemCard = props => {
  let itemCards = props.itemsData;
  //   console.log(itemCards);
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={itemCards.imageurl} />
        </CardMedia>
        <CardTitle title="Red Academy" subtitle={itemCards.tags} />
        <CardText>
          {/* {itemCards.description.map((item, index) => {
            return <span>{(index ? ", " : "") + item}</span>;
          })} */}
          {itemCards.description}
        </CardText>
        <RaisedButton label="Borrow" style={style} />
      </Card>
    </div>
  );
};

//use material ui

export default ItemCard;
