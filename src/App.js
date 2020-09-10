import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Homepage";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {fab} from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;

library.add(faBars, faTimes, fab)