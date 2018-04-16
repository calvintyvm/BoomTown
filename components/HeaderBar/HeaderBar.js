import logo from "../../images/boomtown-logo.svg";
import React from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import { cyan200, grey900, grey500 } from "material-ui/styles/colors";
import "./styles.css";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const HeaderBar = () => {
  return (
    <AppBar
      className="Header"
      iconElementLeft={<img src={logo} />}
      // title={<span style={styles.title}>Title</span>}
    >
      <DropDownMenu
        className="dropDown"
        value={"helloooo"}
        onChange={this.handleChange}
        autoWidth={false}
      >
        <MenuItem value={1} primaryText="Custom width" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
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
    </AppBar>
  );
};

export default HeaderBar;

//  need to map
// pass down as props
//map the object
//assign value for title

//header stateful? Need to change state
