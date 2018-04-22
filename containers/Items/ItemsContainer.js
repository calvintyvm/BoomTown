import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import Items from './Items';
import './styles.css';
import { fetchItemsFromUrl } from '../../redux/modules/items';
// import ItemCard from "../../components/ItemCardList";

// const userUrl = "http://localhost:3000/users";
// const itemsUrl = "http://localhost:3000/items";


class ItemsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItemsFromUrl());
  }

  filterItems = itemsData => {
    if (itemsData.itemFilters.length > 0) {
      const filteredItems = itemsData.items.filter(item => item.tags.filter(tag =>
        itemsData.itemFilters.find(filter => filter === tag)).length);
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


export default connect(state => ({
    itemsData: state.itemsData
  }))(ItemsContainer);
