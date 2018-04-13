import React, { Component } from "react";
import Items from "./Items";
// import ItemCard from "../../components/ItemCardList";

const userUrl = "http://localhost:3000/users";
const itemsUrl = "http://localhost:3000/items";

class ItemsContainer extends Component {
  constructor() {
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
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
      .then(objects => {
        userArray = objects[0];
        itemsArray = objects[1];
        itemsArray.map((item, index) => {
          userArray.map((user, index) => {
            if (user.id == item.itemowner) {
              item.itemowner = user;
            }
          });
        });
        this.setState({
          itemsData: itemsArray
        });
        console.log(this.state.itemsData);
      })
      .then(() => this.setState({ isLoading: false, itemsData: itemsArray }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Items itemsData={this.state.itemsData} />
      </div>
    );
  }
}

export default ItemsContainer;
