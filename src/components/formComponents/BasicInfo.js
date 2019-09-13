import React from 'react';
import { Consumer } from '../Context';

const BasicInfo = () => {
  return(
    <Consumer>
      { ({ actions }) => {
        return(
          <React.Fragment>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Name"></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="example@me.com"></input>
            </div>
            <div className="form-group">
              <label htmlFor="role">Job Role:</label>
              <select onChange={(event) => actions.showOrHide(event)} className="custom-select form-control" id="role" name="role">
                <option value="full-stack js developer">Full Stack JavaScript Developer</option>
                <option value="front-end developer">Front End Developer</option>
                <option value="back-end developer">Back End Developer</option>
                <option value="designer">Designer</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
              <input type="text" className="form-control my-4" id="other" placeholder="Role"></input>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default BasicInfo;
