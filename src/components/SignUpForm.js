import React from 'react';

const SignUpForm = () => {
  return(
    <div>
      <hr />
      <div className="row py-4 text-muted">
        <div className="col-md col-xl-5">
          <p><strong>About Treehouse</strong></p>
          <p>Treehouse brings affordable technology education to people everywhere to help them achieve their dreams and change the world.</p>
        </div>
        <div className="col-md col-xl-5 ml-auto">
          <p><strong>Stay up-to-date on Full Stack Conf</strong></p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Email"></input>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">Sign up</button>
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SignUpForm;
