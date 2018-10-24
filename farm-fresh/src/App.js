import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import GetStarted from "./pages/GetStarted";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/get-started" component={GetStarted} />
      </Switch>
    </div> 
  </Router>  
);


export default App;
