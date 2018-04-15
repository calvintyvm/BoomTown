import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import muiTheme from "./config/theme";
import Layout from "./components/Layout";
// import Login from "./containers/Login";
// import Items from "./containers/Items";
import Routes from "./Routes";
import HeaderBar from "./components/HeaderBar";

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout>
      <HeaderBar />
      <Routes />
    </Layout>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
