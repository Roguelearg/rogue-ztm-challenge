import React, {Component} from 'react';
import Blockchain from '../../components/Blockchain/Blockchain';
import './Blockchains.css';

class Blockchains extends Component {

  constructor() {
    super();
    this.state = {
      number: 1
    }
  }

  componentDidMount(){

  }

  createBlockchains = () => {
    const {number} = this.state;
    let vue = [];
    vue.push(<Blockchain key={0}  id={0}/>);
    for(let i = 1; i < number; i++) {
      vue.push(<i className="material-icons mb4" key={`icon${i}`}>keyboard_arrow_down</i>);
      vue.push(<Blockchain key={i} id={i}/>);
    }

    return vue;
  }

  addBlock = () => {
    this.setState({number: this.state.number+1});
  }

  render(){
    return (
      <div className='chain'>
        {this.createBlockchains().map(block => {
          return block;
        })
        }
        <button type="button" className="btn btn-primary" onClick={this.addBlock}>Add Block</button>
      </div>
    );
  }
}

export default Blockchains;
