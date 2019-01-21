import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Information from "./Information";
import Contact from "./Contact";
import Login from "./Login";

class NavigationMenu extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <p>NavigationMenu</p>
        <hr />
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/information">Information</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/information" component={Information}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login" component={Login}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default NavigationMenu;