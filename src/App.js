import React, { Component } from 'react';
import Counters from './components/Counters';
import './App.css';

class App extends Component {
  constructor(){
      super();
      console.log('App-constructor');
  }

  componentDidMount(){
      console.log('Component Mounted');
  }

  render() {
      console.log('Component rendered');
      return (
          <main className="container">
              <Counters />
          </main>
      )
  }
}

export default App;
