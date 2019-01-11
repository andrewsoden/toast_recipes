import React, { Component } from 'react';
import Header from './Header';
import NavigationMenu from './NavigationMenu.js';
import Content from './Content.js';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavigationMenu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
