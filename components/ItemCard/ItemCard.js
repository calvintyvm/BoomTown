import React from 'react';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';


const style = {
  margin: 12
};

const styleAvatar = {
  borderRadius: 30
};

const ItemCard = props => {
  const item = props.itemsData;

  return (
      <div>
          <Card>
              <CardMedia>
                  <img src={item.imageurl} alt="card" />
              </CardMedia>
              <Link to={`/profile/${item.itemowner.id}`}>
                  <CardHeader
                      title={item.itemowner.fullname}
                      subtitle={moment(item.created, 'YYYYMMDD').fromNow()}
                      avatar={
                          <Gravatar email={item.itemowner.email} style={styleAvatar} />
            }
                  />
              </Link>
              <CardTitle
                  title="Red Academy"
                  subtitle={item.tags.map((item, index) => <span key={index}>{(index ? ', ' : '') + item}</span>)}
              />
              <CardText>{item.description}</CardText>
              <RaisedButton label="Borrow" style={style} />
          </Card>
      </div>
  );
};

ItemCard.propTypes = {
  itemsData: PropTypes.shape({
    items: PropTypes.array,
    isLoading: PropTypes.bool,
    itemFilters: PropTypes.array,
    error: PropTypes.string
  }).isRequired
};

export default ItemCard;
