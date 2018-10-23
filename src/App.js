import React, { Component } from 'react';
import logo from './LogoBF.png';
import './App.css';
import MoviesForm from './MoviesForm'

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <MoviesForm/>
      </div>
    );
  }
}

export default App;
