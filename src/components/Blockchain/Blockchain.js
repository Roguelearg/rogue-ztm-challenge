import React, {Component} from 'react';
import './Blockchain.css';

class Blockchain extends Component {

  constructor(props) {
    super(props);

    const now = new Date().toUTCString();
    console.log(this.props);
    const iniData = this.props.id > 0 ? this.props.data : "Welcome to Brendon's Blockchain"
    this.state={
      id: this.props.id,
      date: now,
      data: iniData,
      nonce: 0,
      previousHash: this.props.previousHash,
      hash: '0',
      validHash: true
    }

  }

  componentDidMount(){
    this.props.repareHash(this.state.id, this.state.date, this.state.data, this.state.previousHash, this.renderHash.bind(this), this.renderNounce.bind(this));
  }

  renderHash = (pro) => {
    let params = pro;
    this.setState({hash: params.hash});
  }

  renderNounce = (pro) => {
    let params = pro;
    this.setState({nonce: params.nonce, validHash: true});
  }

  renderNumBlock = () => {
    const {id} = this.state;
    return id > 0 ? `Block #${id}` : 'Genesis Block';
  }

  componentWillReceiveProps(nextProps) {
    const ahah = nextProps;
    if(ahah.previousHash !== this.state.previousHash) {
      this.props.onHashChange(this.state.id, this.state.date, this.state.data, this.state.previousHash, this.state.nonce, this.renderHash.bind(this));
      this.setState({previousHash: ahah.previousHash})
    }
  }

  repare = () => {
    this.props.repareHash(this.state.id, this.state.date, this.state.data, this.state.previousHash, this.renderHash.bind(this), this.renderNounce.bind(this));
  }


  onDataChange = (event) =>
  {
    const data = event.target.value;
    const {id, date, previousHash, nonce} = this.state;
    this.setState({data: data});
    this.props.onHashChange(id, date, data, previousHash, nonce, this.renderHash.bind(this));
  }

  nonceOrRepareHash = () => {

    return this.verifyHash(this.state.hash) ?
      <p className="nonce small-border asc">{this.state.nonce}</p> :
      <button type="button" className="nonce asc btn btn-info build" onClick={this.repare}><i className="material-icons fs2 fw6">build</i></button>

  }

  verifyHash(hash) {
    return (hash.substring(0, 3) === '000');
  }

  colorHash = (hash) => {
    return this.verifyHash(hash.toString()) ? {borderColor: 'green', color: 'green', backgroundColor: 'rgba(0,255,0,0.1)' } : {borderColor: 'red', color: 'red', backgroundColor: 'rgba(255,0,0,0.1)'};
  }

  colorPreviousHash = (hash) => {
    if(hash !== 0) {
      return this.verifyHash(hash.toString()) ? {color: 'green'} : {color: 'red'};
    }
  }

  render(){
    return (
      <div className="grid mb4">
        <div className="datas gridData">
          <p className="data small-border asc bl">Data</p>
          <input className="input form-control small-border br lf" type="text" value={this.state.data} onChange={this.onDataChange}/>
        </div>
        <div className="previousHash">
          <p className="label" id="previousHash">Previous Hash</p>
          <p className="hash" id="previous" style={this.colorPreviousHash(this.state.previousHash)}>{this.state.previousHash}</p>
        </div>
        <div className="hashes">
          <p className="label" id="presentHash">Hash</p>
          <p className="hash small-border bl br" id="present" style={this.colorHash(this.state.hash)}>{this.state.hash}</p>
        </div>
        <div className="grid2">
          <div className="grid3">
            <p className="blockOrder h2 title asc">{this.renderNumBlock()}</p>
            <p className="blockDate">on {this.state.date}</p>
          </div>
          {this.nonceOrRepareHash()}
        </div>
      </div>
    );
  }
}

export default Blockchain;
