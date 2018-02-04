import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends Component {

  constructor() {
    super();

    this.state = {
      width: 0,
      maxWidth:0,
      position: 0,
      prev: 'true',
      next: 'true'
    }
  }

  componentDidMount(){
    const width = this.carousel.clientWidth;
    const prev = 1;
    const maxWidth = -this.carousel.scrollWidth;
    const next = this.toggleNextButton(-width, maxWidth);
    this.setState({width, prev, maxWidth, next});
  }

  nextPosition = () => {
    const width = this.carousel.clientWidth;
    const {position} = this.state;
    const prev = this.togglePrevButton(position-width);
    const next = this.toggleNextButton(position-width);
    if(!next) {
      this.setState({position: position-width, prev: prev, next: next, width: width});
    }
  }

  previousPosition = () => {
    const width = this.carousel.clientWidth;
    const {position} = this.state;
    const nextPos = position+width > 0 ? 0 : position+width;
    const prev = this.togglePrevButton(position+width);
    const next = this.toggleNextButton(position+width);
    if(!prev){
      this.setState({position: nextPos, prev: prev, next: next, width: width});
    }
  }

  togglePrevButton = (pos, maxWidth=this.state.maxWidth) => {
    if(pos === -maxWidth) return 1;
    else return 0;
  }

  toggleNextButton = (pos, maxWidth=this.state.maxWidth) => {
    if(pos > maxWidth) return 0;
    else return 1;
  }

  render(){
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <p role="button" className="carousel-control-prev" data-slide="prev" onClick={this.previousPosition} ref={(prev) => this.prev = prev} disabled={this.state.prev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </p>
        <div className="carousel-inner" ref={(carousel) => this.carousel = carousel}>
          <div className="carousel-item active" style={{transform: `translate3d(${this.state.position}px, 0px, 0px)`}} >
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
            <i className="material-icons">person</i>
          </div>
        </div>
        <p role="button" className="carousel-control-next" data-slide="next" onClick={this.nextPosition} ref={(next) => this.next = next} disabled={this.state.next}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </p>
      </div>
    );
  }
}

export default Carousel;
