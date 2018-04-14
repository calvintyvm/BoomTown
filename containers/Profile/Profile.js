import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";

const Profile = props => {
  let items = props.itemsData;
  let profileArray = [];
  //ask about  map, whether or not item or itemowner is best for borrower later(very specific itemwoner)
  // console.log(item);
  // do ur profile card here
  //.length to check how many
  return (
    <div>
      <h1>
        {items.map((item, index) => {
          profileArray = item.itemowner;
        })}
        {profileArray.fullname}
        {profileArray.bio}
        {items.length} items Shared
      </h1>
    </div>
  );
};

export default Profile;
