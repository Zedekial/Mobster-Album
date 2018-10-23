import React, { Component } from 'react';
import '../public/App.css';
import HeaderComponent from './HeaderComponent';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HeaderComponent />
          <h1>New Mobster Album</h1>
        </header>
      </div>
    );
  }
}

export default HomePage;
