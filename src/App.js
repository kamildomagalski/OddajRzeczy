import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {fab} from '@fortawesome/free-brands-svg-icons';
import Home from "./components/Homepage";
import { withAuthentication } from './components/Session'

import LogIn from "./components/Application/LogIn";
import SignUp from "./components/Application/SignUp";
import LogOut from "./components/Application/LogOut";
import AppPulpit from "./components/Application/AppPulpit";


function App() {
  
  return (
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/login'} exact component={LogIn}/>
          <Route path={'/signup'} exact component={SignUp}/>
          <Route path={'/logout'} exact component={LogOut}/>
          <Route path={'/app'} exact component={AppPulpit}/>
        </Switch>
      </Router>
  );
}

export default withAuthentication(App);

library.add(faBars, faTimes, fab)