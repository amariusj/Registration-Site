import React from 'react';
import { Consumer } from '../Context'

const Activities = () => {
  return(
    <Consumer>
      { ({ actions }) => {
        return(
          <fieldset onChange={(event) => actions.checkDisable(event)} className="Activities">
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="main"></input>
              <label className="custom-control-label font-weight-bold" htmlFor="main">Main Conference - $200</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="framworks-shop"></input>
              <label className="custom-control-label" htmlFor="framworks-shop">JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="libraries-shop"></input>
              <label className="custom-control-label" htmlFor="libraries-shop">JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="express-shop"></input>
              <label className="custom-control-label" htmlFor="express-shop">Express Workshop — Tuesday 9am-12pm, $100</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="node-shop"></input>
              <label className="custom-control-label" htmlFor="node-shop">Node.js Workshop — Tuesday 1pm-4pm, $100</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="tools-shop"></input>
              <label className="custom-control-label" htmlFor="tools-shop">Build tools Workshop — Wednesday 9am-12pm, $100</label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input type="checkbox" className="custom-control-input" id="npm-shop"></input>
              <label className="custom-control-label" htmlFor="npm-shop">npm Workshop — Wednesday 1pm-4pm, $100</label>
            </div>
          </fieldset>
        );
      }}
    </Consumer>
  );
}

export default Activities;
