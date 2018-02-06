import React, {Component} from 'react';
import './Blockchain.css';

class Blockchain extends Component {

  // constructor() {
  //   super();
  // }
  //
  // componentDidMount(){
  //
  // }

  render(){
    return (
      <div className="grid">
        <div className='datas'>
          <p className='data'>Data</p>
          <input className='input form-control' type="text" value="Welcome to Brendon's Blockchain"/>
        </div>
        <div className='hashes'>
          <div className='previousHash'>
            <p className='label' id='previousHash'>Previous Hash</p>
            <p className='hash' id='previous'>0</p>
          </div>
          <p className='label' id='presentHash'>Hash</p>
          <p className='hash' id='present'>0650646454dsef6se4fs1f3s51f5sef13s51f5se1fs1f35s5ef1</p>
        </div>
        <div className='grid2'>
          <div className='grid3'>
            <p className='blockOrder h2 title'>Genesis Block</p>
            <p className='blockDate'>on Tue, 06 Feb 2018 10:46:36 GMT</p>
          </div>
          <p className='nounce'>2485</p>
        </div>
      </div>
    );
  }
}

export default Blockchain;
