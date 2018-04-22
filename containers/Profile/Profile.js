import React from 'react';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';
import './styles.css';

const styleAvatar = {
  borderRadius: 100
};
const Profile = props => {
  let profileArray = [];
  // ask about  map, whether or not item or itemowner is best for borrower later(very specific itemwoner)
  // console.log(item);
  // do ur profile card here
  // .length to check how many
  return (
      <div className="cardContainer">
          {props.profile.forEach((item) => {
        profileArray = item.itemowner;
      })}
          <Card className="card">
              <div className="innerCardContainer">
                  <div>
                      <CardTitle className="cardTitle" title={profileArray.fullname} />
                      <CardTitle className="cardSubTitle" subtitle={profileArray.bio} />
                  </div>
                  <div style={{ marginLeft: '2rem' }}>
                      <CardText className="cardNumber">{props.profile.length}</CardText>
                      <CardText className="cardText">Items Shared</CardText>
                      <CardText className="cardNumber">0</CardText>
                      <CardText className="cardText">Items Borrowed</CardText>
                  </div>
                  <CardHeader
                      className="cardAvatar"
                      avatar={
                          <Gravatar
                              email={profileArray.email}
                              size={180}
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

// export default Profile;

Profile.propTypes = {
profile: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default connect(state => ({
    profile: state.profileData.profile
  }))(Profile);
