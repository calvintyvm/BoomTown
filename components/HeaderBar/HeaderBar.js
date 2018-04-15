import logo from "../../images/boomtown-logo.svg";
import React from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import { cyan500, cyan200, grey900, grey500 } from "material-ui/styles/colors";

const HeaderBar = () => {
  return (
    <AppBar iconElementLeft={<img src={logo} />}>
      <DropDownMenu
      // value={"helloooo"}
      // onChange={this.handleChange}
      // style={styles.customWidth}
      // autoWidth={false}
      //need to map
      >
        <MenuItem value={1} primaryText="Custom width" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
      <FlatButton
        label="My Profile"
        backgroundColor={cyan500}
        hoverColor={cyan200}
      />
      <FlatButton
        label="Logout"
        backgroundColor={grey900}
        hoverColor={grey500}
      />
    </AppBar>
  );
};

export default HeaderBar;
