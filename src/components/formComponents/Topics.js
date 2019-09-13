import React from 'react';

const Topic = () => {
  return(
    <React.Fragment>
      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
        <input type="checkbox" className="custom-control-input" id="frameworks"></input>
        <label className="custom-control-label" htmlFor="frameworks">JavaScript Frameworks</label>
      </div>
      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
        <input type="checkbox" className="custom-control-input" id="libraries"></input>
        <label className="custom-control-label" htmlFor="libraries">JavaScript Libraries</label>
      </div>
      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
        <input type="checkbox" className="custom-control-input" id="nodejs"></input>
        <label className="custom-control-label" htmlFor="nodejs">Node.js</label>
      </div>
      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
        <input type="checkbox" className="custom-control-input" id="tools"></input>
        <label className="custom-control-label" htmlFor="tools">Build Tools</label>
      </div>
      <div className="custom-control custom-checkbox mr-sm-2 mb-3">
        <input type="checkbox" className="custom-control-input" id="es2015"></input>
        <label className="custom-control-label" htmlFor="es2015">ES2015</label>
      </div>
    </React.Fragment>
  );
}

export default Topic;
