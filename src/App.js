import React, { Component } from 'react';

import Main from './components/Main';
import logo from './logo.svg';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid border-background">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
