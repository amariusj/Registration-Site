import React from 'react';
import Alert from './formComponents/Alert';

const Form = (props) => {
  const {
    elements,
    submit
  } = props;

  return(
    <form method="post" action="confirmation" className="needs-validation" onSubmit={submit}>
      <Alert />
      {elements()}
      <div className="row">
        <button type="submit" className="btn btn-primary btn-lg mt-4 mx-2 px-4 col">Register</button>
        <button data-dismiss="modal" className="btn btn-secondary btn-lg mt-4 mx-2 px-4 col">Cancel</button>
      </div>
    </form>
  );
}

export default Form;
