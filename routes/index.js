import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import Items from '../containers/Items';
import Login from '../containers/Login';
import Profile from '../containers/Profile';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Items} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile/:id" component={Profile} />
    </Switch>
  );

export default Routes;
