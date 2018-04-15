import React from "react";
import ItemCard from "../../components/ItemCard";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";

var masonryOptions = {
  transitionDuration: 0,
  gutter: 30
};

const styles = {
  width: "100%",
  marginBottom: 20
};

const ItemCardList = props => {
  return (
    <Masonry
      elementType={"ul"}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={true}
      style={styles}
    >
      {props.itemsData.map((item, index) => (
        <li key={index}>
          <ItemCard itemsData={item} />
        </li>
      ))}
    </Masonry>
  );
};

export default ItemCardList;

ItemCardList.propTypes = {
  itemsData: PropTypes.array.isRequired
};
