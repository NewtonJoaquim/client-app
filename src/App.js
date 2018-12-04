import React, { Component } from 'react';
import './App.css';
import ClientList from './components/ClientList';
import AppHeader from './components/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <ClientList />
      </div>
    );
  }
}

export default App;
