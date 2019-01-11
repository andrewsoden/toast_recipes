import React, { Component } from 'react';

class Footer extends Component {

  render() {
    var currentYear = new Date().getFullYear();

    return (
      <div>
        <p>Toast Recipes &copy; Andrew Soden {currentYear}</p>
        <p>A simple mess around website just for writing automation tests against :)</p>
      </div>
    );
  }
}

export default Footer;