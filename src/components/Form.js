import React, { Component } from 'react';
import Alert from './formComponents/Alert';
import BasicInfo from './formComponents/BasicInfo';
import Topics from './formComponents/Topics';
import Activities from './formComponents/Activities';
import Pay from './formComponents/Pay';

class Form extends Component {
  render() {
    return(
      <form action="localhost:3000/" method="post">
        <Alert />

        <h5 className="mb-4">Basic Info</h5>
        <BasicInfo />

        <hr className="my-4"></hr>

        <h5 className="mb-4">Which Topics Interest You Most</h5>
        <Topics />

        <hr className="mb-4"></hr>

        <h5 className="mb-4">Register for Activities</h5>
        <Activities />

        <hr className="mb-4"></hr>

        <h5 className="mb-4">Payment Info:</h5>
        <Pay />

        <button type="submit" data-dismiss="modal" data-toggle="modal" data-target="#confirmation" className="btn btn-primary btn-lg mt-4">Register</button>

      </form>
    )
  }
}

export default Form;
