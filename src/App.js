import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };

  render() {
    return (
      <div className="App">
        <Header title="Welcome to React JDC Training" onHeaderClick={this.onHeaderClick} />
        <Content text="Jaipur is awesome!" />
      </div>
    );
  }
}

export default App;
