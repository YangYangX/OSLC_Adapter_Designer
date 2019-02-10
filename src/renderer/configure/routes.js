/**
 *
 * Application Routes
 *
 */

import React, { Component } from 'react';

import { Route, Switch } from 'react-router';

// Import containers
import Home from '../containers/home';
import Blank from '../containers/blank';
import AddNewProject from '../containers/addNewProject';
import Editor from '../containers/editor';
import AllProjects from '../containers/allProjects';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/blank" component={Blank} />
    <Route exact path="/addnewproject" component={AddNewProject} />
    <Route exact path="/editor" component={Editor} />
    <Route exact path="/allprojects" component={AllProjects} />
  </Switch>
);

export default routes;
