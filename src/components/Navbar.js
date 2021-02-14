import React from 'react';
import { Consumer } from './Context'

const Navbar = () => {
  return(
    <Consumer>
      { ({actions}) => {
        return(
          <nav id="navbar" className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
            <div className="container d-flex">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-5 pr-5" href="https://github.com/amariusj" target="_blank" rel="noopener noreferrer">Presented by Amarius Jones</a>
              <div className="mr-5 ml-5"></div>
              <div className="collapse navbar-collapse ml-auto pl-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link" href="#home" onClick={() => actions.collapse()} >Home <span className="sr-only">(current)</span></a>
                  <a className="nav-item nav-link" href="#about" onClick={() => actions.collapse()}>About</a>
                  <a className="nav-item nav-link" href="#speakers" onClick={() => actions.collapse()}>Speakers</a>
                  <a className="nav-item nav-link" href="#schedule" onClick={() => actions.collapse()}>Schedule</a>
                </div>
              </div>
            </div>
          </nav>
        );
      }}
  </Consumer>
  )
}

export default Navbar;
