import React from 'react';

const FormModal = () => {
  return(
    <div className="modal fade" id="confirmation" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Registration Form</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

          </div>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
