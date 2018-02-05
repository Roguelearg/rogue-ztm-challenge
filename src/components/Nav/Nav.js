import React from 'react';
import Carousel from '../../containers/Carousel/Carousel';
import './Nav.css';

const Nav = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <h1 id="title" className="">Peers</h1>
          <div className="container">
            <Carousel />
          </div>
        </nav>
      </div>
    );
}

export default Nav;
