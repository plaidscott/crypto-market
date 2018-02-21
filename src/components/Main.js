import React, { Component } from 'react';
import axios from 'axios';
import api from '../utils/api.js';

import '../style/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  ticker = () => {
    api.ticker();
  }
  render() {
    this.ticker();
    return (
      <div className="Main border-backgroundMain">
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default Main;
