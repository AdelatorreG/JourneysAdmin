import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from "./Navigation";
import welcomeforms from "./welcomeforms";
import loginforms from "./loginforms";
import footer from "./footer";
import navbar from "./navbar";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/loginforms" component={loginforms} exact />
            <Route path="/welcomeforms" component={welcomeforms} exact />
            <Route path="/footer" component={footer} exact />
            <Route path="/navbar" component={navbar} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};
/*
const App = () =>
  <Router>
    <Navigation/>
  </Router>*/
/*
 class App extends Component {

  render() {
    return (
   <Router>
   <div>
   <Navigation />
   </div>
 </Router>
    );
  }
 } 
*/
export default App;
