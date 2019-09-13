import React from 'react';
import { Consumer } from './Context';

const CallOutButton = () => {
  return(
    <Consumer>
      { ({ actions }) => {
        return(
          <button onClick={() => actions.focus(document.getElementById('name'))} type="button" className="btn btn-outline-info btn-lg d-block mx-auto my-5" data-toggle="modal" data-target="#register">Don't Miss Out, Register Now</button>
        );
      }}
    </Consumer>
  );
}

export default CallOutButton;
