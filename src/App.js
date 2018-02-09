import React, { Component } from 'react';
import Blockchains from './containers/Blockchains/Blockchains';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number:{
      value: 120,
      density: {
        enable: true,
        value_area: 2000
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
        <Particles className="particles"
          params={particlesOptions}
        />
        <header className="App-header regwidth">
          <h1 className="title">Blockchain</h1>
        </header>
        <div className="content regwidth">
          <Blockchains />
        </div>
        <footer className="regwidth">
          <div className="gridFooter">
            <h4 className="name">Copyrigth<i className="material-icons copy">copyright</i>Brendon T.</h4>
            <div className="icons">
              <a href="https://github.com/Roguelearg">
                <i className="fa fa-github" aria-hidden= "true"/>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
