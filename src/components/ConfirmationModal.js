import React from 'react';

const ConfirmationModal = () => {
  return(
    <div className="modal fade" id="confirmation" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Thank you for Registering!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>You should recieve an email shortly regarding your Ticket and Registration Confirmation.</p>
            <button data-dismiss="modal" data-target="#register" data-toggle="modal" className="btn btn-secondary btn-lg mt-4 col">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
