import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Gravatar from "react-gravatar";
import "./styles.css";

const styleAvatar = {
  borderRadius: 100
};

const Profile = props => {
  let items = props.itemsData;
  let profileArray = [];
  //ask about  map, whether or not item or itemowner is best for borrower later(very specific itemwoner)
  // console.log(item);
  // do ur profile card here
  //.length to check how many
  return (
    <div className="cardContainer">
      {items.map((item, index) => {
        profileArray = item.itemowner;
      })}
      <Card className="card">
        {/* <Link to={`profile/${item.itemowner.id}`}> */}
        <div className="innerCardContainer">
          <CardTitle
            className="cardTitle"
            title={profileArray.fullname}
            subtitle={profileArray.bio}
          />

          <CardText className="cardText">{items.length} items Shared</CardText>

          <CardHeader
            className="cardAvatar"
            avatar={
              <Gravatar
                email={profileArray.email}
                size={200}
                style={styleAvatar}
              />
            }
          />
        </div>
        {/* </Link> */}
      </Card>
    </div>
  );
};

export default Profile;
