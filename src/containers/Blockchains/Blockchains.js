import React, {Component} from 'react';
import Blockchain from '../../components/Blockchain/Blockchain';
import './Blockchains.css';

class Blockchains extends Component {

  constructor() {
    super();
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className='chain'>
        <Blockchain />
      </div>
    );
  }
}

export default Blockchains;
