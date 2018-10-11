import React, { Component } from 'react';
import logo from './logo.svg'; // importing from ./ assumes that is from root
import './Welcome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Django with React and Webpacks!</h1>
        </header>
        <p className="App-intro">
          Honestly, this is overkill.
        </p>
      </div>
    );
  }
}

export default App;

