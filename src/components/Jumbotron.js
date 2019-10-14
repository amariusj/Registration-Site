import React from 'react';
import { Consumer } from './Context';

//<button onClick={() => actions.focus(document.getElementById('name'))} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#register">Register Now</button>

const Jumbotron = () => {
  return(
    <Consumer>
      { ({ actions }) => {
        return(
          <div className="jumbotron jumbotron-fluid bg-info text-white">
            <div className="container text-sm-center pt-5">
              <h1 className="display-2">Full Stack Conf</h1>
              <p className="lead">A One-day Conference About All Things JavaScript!</p>
              <div className="btn-group mt-4" role="group" aria-label="Callout buttons">
                <button onClick={() => actions.focus(document.getElementById('name'))} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#register">Register Now</button>
                <a className="btn btn-light btn-lg" href="#speakers">See Speakers</a>
              </div>
            </div>
          </div>
        );
      } }
    </Consumer>
  );
}

export default Jumbotron;
