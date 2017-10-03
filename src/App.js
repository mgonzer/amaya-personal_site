import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Main />
      </div>
    );
  }
}

export default App;
