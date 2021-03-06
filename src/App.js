import React, { Component } from 'react';
import Header from './Header';
import NavigationMenu from './NavigationMenu.js';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <NavigationMenu />
          <Footer />
      </div>
    );
  }
}

export default App;
