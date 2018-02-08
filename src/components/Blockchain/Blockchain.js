import React, {Component} from 'react';
import './Blockchain.css';

class Blockchain extends Component {

  constructor(props) {
    super(props);

    const now = new Date().toUTCString();
    const iniData = this.props.id > 0 ? "" : "Welcome to Brendon's Blockchain"
    this.state={
      id: this.props.id,
      date: now,
      data: iniData,
      nounce: 0,
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
    this.setState({nounce: params.nounce, validHash: true});
  }

  renderNumBlock = () => {
    const {id} = this.state;
    return id > 0 ? `Block #${id}` : 'Genesis Block';
  }

  componentWillReceiveProps(nextProps) {
    const ahah = nextProps;
    if(ahah.previousHash !== this.state.previousHash) {
      this.props.onHashChange(this.state.id, this.state.date, this.state.data, this.state.previousHash, this.state.nounce, this.renderHash.bind(this));
      this.setState({previousHash: ahah.previousHash})
      if(this.state.validHash) this.setState({validHash: false});
    }
  }

  repare = () => {
    this.props.repareHash(this.state.id, this.state.date, this.state.data, this.state.previousHash, this.renderHash.bind(this), this.renderNounce.bind(this));
  }


  onDataChange = (event) =>
  {
    const data = event.target.value;
    const {id, date, previousHash, nounce} = this.state;
    this.setState({data: data});
    this.props.onHashChange(id, date, data, previousHash, nounce, this.renderHash.bind(this));
    if(this.state.validHash) this.setState({validHash: false});
  }

  nounceOrRepareHash = () => {

    return this.state.validHash ?
      <p className='nounce small-border asc'>{this.state.nounce}</p> :
      <button type="button" className='nounce asc btn btn-info build' onClick={this.repare}><i className="material-icons fs2 fw6">build</i></button>

  }



  render(){
    return (
      <div className="grid mb4">
        <div className='datas gridData'>
          <p className='data small-border asc bl'>Data</p>
          <input className='input form-control small-border br' type="text" value={this.state.data} onChange={this.onDataChange}/>
        </div>
        <div className='previousHash'>
          <p className='label' id='previousHash'>Previous Hash</p>
          <p className='hash' id='previous'>{this.state.previousHash}</p>
        </div>
        <div className='hashes'>
          <p className='label' id='presentHash'>Hash</p>
          <p className='hash small-border bl br' id='present'>{this.state.hash}</p>
        </div>
        <div className='grid2'>
          <div className='grid3'>
            <p className='blockOrder h2 title asc'>{this.renderNumBlock()}</p>
            <p className='blockDate'>on {this.state.date}</p>
          </div>
          {this.nounceOrRepareHash()}
        </div>
      </div>
    );
  }
}

export default Blockchain;