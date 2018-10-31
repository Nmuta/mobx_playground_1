import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observable} from "mobx";
import {observer} from "mobx-react";
import Box1 from "./box1";

@observer class App extends Component {


  increment = ()=>  { this.props.store.increment() }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="counter_area">
          <div className="counter_box"> count: {/*this section intentionally removed */}   </div>
        </div>

        <button onClick={this.increment}> bump </button>
        <div class="stateless_components">
          <Box1 store={this.props.store} />
          <Box1 store={this.props.store} />
          <Box1 store={this.props.store} />
        </div>

      </div>
    );
  }
}

export default App;
