import React, { Component } from 'react';

import './css/Footer.css';

class Footer extends Component {

  render() {
    var currentYear = new Date().getFullYear();

    return (
      <div class="footer">
        <p>Toast Recipes &copy; Andrew Soden {currentYear}</p>
        <p>A simple mess around website just for writing automation tests against :)</p>
      </div>
    );
  }
}

export default Footer;