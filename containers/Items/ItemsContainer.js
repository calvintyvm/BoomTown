import React, { Component } from "react";
import CircularProgress from "material-ui/CircularProgress";
import Items from "./Items";
import "./styles.css";
// import ItemCard from "../../components/ItemCardList";

const userUrl = "http://localhost:3000/users";
const itemsUrl = "http://localhost:3000/items";

class ItemsContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      itemsData: [],
      random: 0
    };
  }
  componentDidMount() {
    const urls = [userUrl, itemsUrl];
    this.setState({ isLoading: true });
    let userArray = [];
    let itemsArray = [];
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
      })

      .then(() => this.setState({ isLoading: false, itemsData: itemsArray }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <CircularProgress className="loadingIcon" thickness={7} />
        ) : (
          <Items itemsData={this.state.itemsData} />
        )}
      </div>
    );
  }
}

export default ItemsContainer;
