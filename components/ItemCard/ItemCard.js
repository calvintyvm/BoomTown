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
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";
import Gravatar from "react-gravatar";

const style = {
  margin: 12
};

const styleAvatar = {
  borderRadius: 30
};
var masonryOptions = {
  transitionDuration: 0
};

const ItemCard = props => {
  let itemCards = props.itemsData;
  //   console.log(itemCards);
  return (
    <div>
      <Masonry
        className={"my-gallery-class"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        <Card>
          <CardMedia>
            <img src={itemCards.imageurl} />
          </CardMedia>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar={
              <Gravatar email="mathews.kyle@gmail.com" style={styleAvatar} />
            }
          />
          <CardTitle title="Red Academy" subtitle={itemCards.tags} />
          <CardText>
            {/* {itemCards.description.map((item, index) => {
            return <span>{(index ? ", " : "") + item}</span>;
          })} */}
            {itemCards.description}
          </CardText>
          <RaisedButton label="Borrow" style={style} />
        </Card>
      </Masonry>
    </div>
  );
};

ItemCard.propTypes = {
  itemsData: PropTypes.object.isRequired
};

export default ItemCard;
