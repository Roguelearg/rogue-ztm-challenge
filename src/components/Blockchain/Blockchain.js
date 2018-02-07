import React, {Component} from 'react';
import './Blockchain.css';

class Blockchain extends Component {

  constructor({id}) {
    super();
    this.state={
      id: id,
      previousHash: '0',
      hash: '0'

    }
  }
  //
  // componentDidMount(){
  //
  // }

  renderNumBlock = () => {
    const {id} = this.state;
    return id > 0 ? `Block #${id}` : 'Genesis Block';
  }

  render(){
    console.log(this.state.id);
    return (
      <div className="grid mb4">
        <div className='datas gridData'>
          <p className='data small-border asc bl'>Data</p>
          <input className='input form-control small-border br' type="text" value="Welcome to Brendon's Blockchain"/>
        </div>
        <div className='previousHash'>
          <p className='label' id='previousHash'>Previous Hash</p>
          <p className='hash' id='previous'>0</p>
        </div>
        <div className='hashes'>
          <p className='label' id='presentHash'>Hash</p>
          <p className='hash small-border bl br' id='present'>0650646454dsef6se4fs1f3s51f5sef13s51f5se1fs1f35s5ef1</p>
        </div>
        <div className='grid2'>
          <div className='grid3'>
            <p className='blockOrder h2 title asc'>{this.renderNumBlock()}</p>
            <p className='blockDate'>on Tue, 06 Feb 2018 10:46:36 GMT</p>
          </div>
          <p className='nounce small-border asc'>2485</p>
        </div>
      </div>
    );
  }
}

export default Blockchain;
