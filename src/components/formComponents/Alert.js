import React from 'react';

const Alert = () => {
  return(
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Hurry!</strong> Early Bird Registration Ends in 2 Days.
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
