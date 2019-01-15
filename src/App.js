import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <User name={"hoge"} />
      </div>
    );
  }
}

const User = (props) => {
  return <div>{props.name}</div>
}

export default App;
