import React, { Component } from 'react';
import Header from './Header';
import NavigationMenu from './NavigationMenu.js';
import Footer from './Footer';

import ScrollArea from 'react-scrollbar';


class App extends Component {
  render() {
    return (
      <div>
        <ScrollArea>
          <Header />
          <NavigationMenu />
          <Footer />
        </ScrollArea>
      </div>
    );
  }
}

export default App;
