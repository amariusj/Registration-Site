import React from 'react';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
      <div className="container d-flex">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mr-5 pr-5" href="https://github.com/amariusj" target="_blank" rel="noopener noreferrer">Presented by Amarius Jones</a>
        <div className="mr-5 ml-5"></div>
        <div className="collapse navbar-collapse ml-auto pl-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#about">About</a>
            <a className="nav-item nav-link" href="#speakers">Speakers</a>
            <a className="nav-item nav-link" href="#schedule">Schedule</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
