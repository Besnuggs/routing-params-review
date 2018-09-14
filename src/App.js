import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Details from './Components/Details';
import Homeworld from './Components/Homeworld';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
        <h1>StarWars Detail Finder</h1>
        <h3>Click below to find out more</h3>


      <Switch>
      <Route component={ Dashboard } exact path="/"/>
      <Route component={ Details } path="/Details/:id" />
      <Route component={ Homeworld } path="/Homeworld/" />
      </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
