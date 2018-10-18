import React, { Component } from 'react';


import SearchForm from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <h2>ARC Database</h2>
            <SearchForm/>
      </div>
    );
  }
}

export default App;
