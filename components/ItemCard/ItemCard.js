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
import { Link } from "react-router-dom";
import Profile from "../../containers/Profile";
import moment from "moment";

const style = {
  margin: 12
};

const styleAvatar = {
  borderRadius: 30
};

const ItemCard = props => {
  let item = props.itemsData;

  return (
    <div>
      <Card>
        <CardMedia>
          <img src={item.imageurl} />
        </CardMedia>
        <Link to={`/profile/${item.itemowner.id}`}>
          <CardHeader
            title={item.itemowner.fullname}
            subtitle={moment(item.created, "YYYYMMDD").fromNow()}
            avatar={
              <Gravatar email={item.itemowner.email} style={styleAvatar} />
            }
          />
        </Link>
        <CardTitle
          title="Red Academy"
          subtitle={item.tags.map((item, index) => {
            return <span key={index}>{(index ? ", " : "") + item}</span>;
          })}
        />
        <CardText>{item.description}</CardText>
        <RaisedButton label="Borrow" style={style} />
      </Card>
    </div>
  );
};

ItemCard.propTypes = {
  itemsData: PropTypes.object.isRequired
};

export default ItemCard;
