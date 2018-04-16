import React, { Component } from "react";
import Profile from "./Profile";
import ItemCardList from "../../components/ItemCardList";
import PropTypes from "prop-types";
import CircularProgress from "material-ui/CircularProgress";

const userUrl = "http://localhost:3000/users";
const itemsUrl = "http://localhost:3000/items";

class ProfileContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      itemsData: []
    };
  }
  componentDidMount() {
    const urls = [userUrl, itemsUrl];
    this.setState({ isLoading: true });
    let userArray = [];
    let itemsArray = [];
    let newestArray = [];
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
      .then(objects => {
        userArray = objects[0];
        itemsArray = objects[1];
        itemsArray.map((item, index) => {
          userArray.map((user, index) => {
            if (user.id === item.itemowner) {
              item.itemowner = user;
            }
          });
        });

        // add to check if == to id
        let newArray = itemsArray.filter(
          item => this.props.match.params.id == item.itemowner.id
        );

        newestArray = newArray;
      })
      .then(() => this.setState({ isLoading: false, itemsData: newestArray }))
      .catch(error => console.log(error));
    {
    }
  }

  render() {
    3;
    // console.log(this.state.itemsData);
    return (
      <div>
        {this.state.isLoading ? (
          <CircularProgress className="loadingIcon" thickness={7} />
        ) : (
          <div>
            <Profile itemsData={this.state.itemsData} />
            <ItemCardList itemsData={this.state.itemsData} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileContainer;
