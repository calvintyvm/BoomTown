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

import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";

// console.log(Store.disp);

// console.log(Store.dispatch(get_name_count()));
const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
    <Router>
      <Layout>
        <Routes />
      </Layout>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
