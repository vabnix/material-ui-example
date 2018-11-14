/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Header from './component/nav/SideMenu';
import Footer from './component/nav/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
