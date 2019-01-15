import React, { Component } from 'react';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           Hello, World!
//       </div>
//     );
//   }
// }
class App extends Component {
  render() {
    return (
        React.createElement('div',null, 'helloworld')
    );
  }
}

export default App;
