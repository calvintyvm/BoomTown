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
  let items = props.itemsData;
  //   console.log(items);
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={items.imageurl} />
        </CardMedia>
        <CardTitle title="Red Academy" subtitle={items.tags} />
        <CardText>
          {/* {items.description.map((item, index) => {
            return <span>{(index ? ", " : "") + item}</span>;
          })} */}
          {items.description}
        </CardText>
        <RaisedButton label="Borrow" style={style} />
      </Card>
    </div>
  );
};

//use material ui

export default ItemCard;
