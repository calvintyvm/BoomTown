import logo from "../../images/boomtown-logo.svg";

import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import { cyan200, grey900, grey500 } from "material-ui/styles/colors";
import "./styles.css";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import TagFilterField from "../TagFilterField";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { fetchItemsFromUrl} from "../../redux/modules/items";

class HeaderBar extends Component {

  componentDidMount(){
    const urls = ["http://localhost:3000/items", "http:://localhost:3000/users"];
    this.props.dispatch(fetchItemsFromUrl(urls));
  }

  getTags = items =>{
    let tags =[];
    if(items.length && items[0] !==undefined){
      items.map(item=>{
        if (item.tags !== undefined){
          if(!item.tags.includes(undefined)){
            item.tags.map(tag=>{
              if(!tags.includes(tag)){
                tags.push(tag);
              }
            });
          }
        }
      });
    }
    return tags
  };


  render() {
    const tags = this.getTags(this.props.items.items)
    return ( 
      <AppBar
        className="Header"
        iconElementLeft={<img src={logo} />}
        // title={<span style={styles.title}>Title</span>}
      >
      {tags.length && <TagFilterField tags={tags}/>}
        <div>
        <RaisedButton
          className="profileButton"
          label="My Profile"
          // hoverColor={cyan200}
        />
        <RaisedButton
          className="logoutButton"
          label="Logout"
          // hoverColor={grey500}
        />
        </div>
      </AppBar>
  
    );
}
}



export default connect(state=>{
  return {
    items:state.itemsData
  }
})(HeaderBar);