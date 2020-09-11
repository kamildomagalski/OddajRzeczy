import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {fab} from '@fortawesome/free-brands-svg-icons';
import Home from "./components/Homepage";


import LogIn from "./components/Application/LogIn";
import SignUp from "./components/Application/SignUp";
import LogOut from "./components/Application/LogOut";


function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/login'} exact component={LogIn}/>
        <Route path={'/signup'} exact component={SignUp}/>
        <Route path={'/logout'} exact component={LogOut}/>
      </Switch>
    </Router>
  );
}

export default App;

library.add(faBars, faTimes, fab)