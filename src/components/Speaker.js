import React from 'react';

const Speaker = (props) => {
  return(
    <div className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <img className="card-img-top" src={props.image} alt="Vivianne"></img>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
		</div>
  );
}

export default Speaker;
