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

const Profile = props => {
  let items = props.itemsData;
  let profileArray = [];
  //ask about  map, whether or not item or itemowner is best for borrower later(very specific itemwoner)
  // console.log(item);
  // do ur profile card here
  //.length to check how many
  return (
    <div>
      {items.map((item, index) => {
        profileArray = item.itemowner;
      })}
      <Card>
        {/* <Link to={`profile/${item.itemowner.id}`}> */}
        <CardHeader
          title={profileArray.fullname}
          subtitle={profileArray.bio}
          avatar={<Gravatar email={profileArray.email} />}
        />
        <CardText>{items.length} items Shared</CardText>
        {/* </Link> */}
      </Card>
    </div>
  );
};

export default Profile;
