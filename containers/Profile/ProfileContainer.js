import React, { Component } from "react";
import Profile from "./Profile";
import ItemCardList from "../../components/ItemCardList";
import PropTypes from "prop-types";
import CircularProgress from "material-ui/CircularProgress";
import { fetchProfileFromUrl} from "../../redux/modules/profile";
import { connect } from "react-redux";

const userUrl = "http://localhost:3000/users";
const itemsUrl = "http://localhost:3000/items";

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProfileFromUrl(this.props.match.params.id))
    console.log(this.props.profile);

  }

  render() {

    console.log(this.props.profile)
    return (

      <div>
        {
          <div>
            <Profile itemsData={this.props.profile} />
            <ItemCardList itemsData={this.props.profile} />
          </div>
        }

      </div>
    );
  }
}


export default connect(state=>{
  return {
    profile:state.profileData.profile
  }
})(ProfileContainer);