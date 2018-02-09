import React, {Component} from 'react';
import Blockchain from '../../components/Blockchain/Blockchain';
import Addblock from '../../components/Addblock/Addblock';
import {sha256} from 'js-sha256';
import './Blockchains.css';

class Blockchains extends Component {

  constructor() {
    super();
    this.state = {
      number: 1,
      hashes: [],
      data: ''
    }
  }

  componentDidMount(){

  }

  createBlockchains = () => {
    const {number} = this.state;
    let vue = [];
    vue.push(<Blockchain key={0}  id={0} repareHash={this.repareHash.bind(this)} previousHash={0} onHashChange={this.onHashChange.bind(this)}/>);
    for(let i = 1; i < number; i++) {
      vue.push(<i className="material-icons mb4" key={`icon${i}`}>keyboard_arrow_down</i>);
      vue.push(<Blockchain key={i} id={i} repareHash={this.repareHash.bind(this)} previousHash={this.state.hashes[i-1]} onHashChange={this.onHashChange.bind(this)} data={this.state.data}/>);
    }
    return vue;
  }

  addBlock = () => {
    this.setState({number: this.state.number+1});
  }

  addData = (data) => {
    this.setState({data: data.target.value});
  }

  repareHash = (id, date, data, previousHash, renderHash, renderNounce) => {
    let nounce = 0;
    let hash = 0;
    do {
        hash = this.createHash(date, data, previousHash, nounce);
        nounce++;
    }while(hash.substring(0, 3) !== '000');
    let hashes = this.state.hashes;
    hashes[id] = hash;
    renderHash({hash: hash});
    renderNounce({nounce: nounce});
    this.setState({hashes: hashes});
    this.setState({data: ''});
  }

  createHash = (date, data, previousHash, nounce) => {
    return sha256(data + date + nounce + previousHash);
  }

  onHashChange = (id, date, data, previousHash, nounce, renderHash) =>
  {
    let hash = this.createHash(date, data, previousHash, nounce)
    let hashes = this.state.hashes;
    hashes[id] = hash;
    this.setState({hashes: hashes});
    renderHash({hash: hash});
  }


  render(){
    return (
      <div className='chain'>
        {
          this.createBlockchains().map(block => {
            return block;
          })
        }
        <Addblock addBlock={this.addBlock} addData={this.addData} data={this.state.data}/>
      </div>
    );
  }
}

export default Blockchains;
