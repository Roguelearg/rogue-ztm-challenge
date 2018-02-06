import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
// import Blockchains from './containers/Blockchains/Blockchains';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number:{
      value: 150,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    line_linked: {
      color: '#00bcd4'
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <header className="App-header">
          <Nav />
        </header>
        <div className='bg'>
          <h1 className="title">Blockchain</h1>
          {/* <Blockchains /> */}
        </div>
      </div>
    );
  }
}

export default App;
