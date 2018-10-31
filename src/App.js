import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer class App extends Component {
  @observable count = 0;

  increment = ()=>  this.count++

  render() {
    return (
      <div className="App">
        <header className="App-header">
        count: {this.count}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.increment}> bump </button>
      </div>
    );
  }
}

export default App;
