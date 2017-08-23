import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import logProps from './components/utilities/logProps';

class App extends Component {
  state = {
    title: 'Welcome to React JDC Training'
  };

  setTitle = title => {
    this.setState({ title });
  };

  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };

  render() {
    return (
      <div className="App">
        <Header {...this.state} onHeaderClick={this.onHeaderClick} />
        <Content text="Jaipur is awesome!" setTitle={this.setTitle} />
      </div>
    );
  }
}

export default logProps(App);
