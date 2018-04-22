import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Profile from './Profile';
import ItemCardList from '../../components/ItemCardList';
import { fetchProfileFromUrl } from '../../redux/modules/profile';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfileFromUrl(this.props.match.params.id));
  }

  render() {
    return (

        <div>
            {
              (this.props.profile.isLoading) ? (
                  <CircularProgress className="loadingIcon" thickness={7} />) :
                (<div>
                    <Profile itemsData={this.props.profile.profile} />
                    <ItemCardList itemsData={this.props.profile.profile} />
                </div>
                )}

        </div>
    );
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.shape({
    profile: PropTypes.array,
    dispatch: PropTypes.func
  }).isRequired
};

export default connect(state => ({
    profile: state.profileData
  }))(ProfileContainer);
