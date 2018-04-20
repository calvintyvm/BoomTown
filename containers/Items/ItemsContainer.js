import React, { Component } from "react";
import CircularProgress from "material-ui/CircularProgress";
import Items from "./Items";
import "./styles.css";
import { connect } from "react-redux";
import { fetchItemsFromUrl} from "../../redux/modules/items";
// import ItemCard from "../../components/ItemCardList";

// const userUrl = "http://localhost:3000/users";
// const itemsUrl = "http://localhost:3000/items";


class ItemsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchItemsFromUrl());
  }

  filterItems = itemsData =>{
    if (itemsData.itemFilters.length > 0){
      let filteredItems = itemsData.items.filter(item=>{
        return item.tags.filter(tag=>
        itemsData.itemFilters.find(filter=>filter === tag)).length;
      });
      return filteredItems;
    }
    return itemsData.items;
  };

  render() {
// console.log(this.props.items)
    return (
      <div>
          {
            (this.props.itemsData.isLoading) ? (
            <CircularProgress className="loadingIcon" thickness={7} />) : 
            (<Items itemsData={this.filterItems(this.props.itemsData)} />
            )}

      </div>
    );
  }
}


export default connect(state=>{
  return {
    itemsData:state.itemsData
  }
})(ItemsContainer);