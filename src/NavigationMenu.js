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

import './css/Navigation.css';

class NavigationMenu extends Component {
  render() {
    return (
      <HashRouter>
      <div>
          <ul className="navigation">
            <li><NavLink to="/" id="section_home">Home</NavLink></li>
            <li><NavLink to="/information" id="section_information">Information</NavLink></li>
            <li><NavLink to="/contact" id="section_contact">Contact</NavLink></li>
            <li><NavLink to="/login" id="section_login">Login</NavLink></li>
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