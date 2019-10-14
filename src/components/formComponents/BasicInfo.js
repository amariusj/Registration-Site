import React from 'react';

const BasicInfo = (props) => {

    const {
      change,
      name,
      email,
      other,
      checkRole,
      blur
    } = props;

    return(
      <React.Fragment>
      <h5 className="mb-4">Basic Info:</h5>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name" placeholder="Name"
          value={name}
          onChange={change}
          onBlur={blur}
        >
        </input>
        <div className="invalid-feedback">
          You must enter a valid name.
        </div>
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="example@me.com"
          value={email}
          onChange={change}
          onBlur={blur}
        >
        </input>
        <div className="invalid-feedback">
          You must enter a valid email address.
        </div>
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="form-group">
        <label htmlFor="role">Job Role:</label>
        <select className="custom-select form-control" id="role" name="role" onChange={checkRole}>
          <option value="full-stack js developer">Full Stack JavaScript Developer</option>
          <option value="front-end developer">Front End Developer</option>
          <option value="back-end developer">Back End Developer</option>
          <option value="designer">Designer</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          className="form-control my-4"
          id="other"
          placeholder="Role"
          value={other}
          onChange={change}
          onBlur={blur}
        >
        </input>
        <div className="invalid-feedback">
          You must enter a valid job role.
        </div>
        <div className="valid-feedback">Looks good!</div>
      </div>
      </React.Fragment>
    );
}

export default BasicInfo;
