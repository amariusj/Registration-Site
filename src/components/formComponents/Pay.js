import React from 'react';

const Pay = (props) => {

  const {
    hideOrShow,
    change,
    ccNum,
    zip,
    cvv,
    blur
  } = props;

  return(
    <React.Fragment>
      <hr className="mb-4"></hr>
      <h5 className="mb-4">Payment Info:</h5>

      <label htmlFor="payment">Payment Option:</label>
      <select id="payment" className="custom-select mb-4" onChange={hideOrShow}>
        <option defaultValue value="credit-card">Credit Card</option>
        <option value="pay-pal">PayPal</option>
        <option value="bitcoin">Bitcoin</option>
      </select>

      <div id="credit-card">
        <div className="form-row">
          <div className="col-lg-6 form-group">
            <label htmlFor="cc-num">Card Number:</label>
            <input
              className="form-control"
              id="ccNum" type="text"
              value={ccNum}
              onChange={change}
              onBlur={blur}
            ></input>
            <div className="invalid-feedback">
              You must enter a valid card number.
            </div>
          </div>
          <div className="col-lg form-group">
            <label htmlFor="zip">Zip Code:</label>
            <input
              className="form-control"
              id="zip" type="text"
              value={zip}
              onChange={change}
              onBlur={blur}
            ></input>
            <div className="invalid-feedback">
              You must enter a valid zip code.
            </div>
          </div>
          <div className="col-lg form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              className="form-control"
              id="cvv" type="text"
              value={cvv}
              onChange={change}
              onBlur={blur}
            ></input>
            <div className="invalid-feedback">
              You must enter a valid security number.
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="col-lg-12">Experiation Date:</label>
          <div className="form-group col-lg-8">
            <select className="custom-select form-control" id="exp-month">
              <option value="1">1 - January</option>
              <option value="2">2 - February</option>
              <option value="3">3 - March</option>
              <option value="4">4 - April</option>
              <option value="5">5 - May</option>
              <option value="6">6 - June</option>
              <option value="7">7 - July</option>
              <option value="8">8 - August</option>
              <option value="9">9 - September</option>
              <option value="10">10 - October</option>
              <option value="11">11 - November</option>
              <option value="12">12 - December</option>
            </select>
          </div>
          <div className="form-group col-lg">
            <select className="custom-select form-control" id="exp-year">
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
      </div>

      <div id="pay-pal" className="fade">
        <p>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.</p>
      </div>

      <div id="bitcoin" className="fade">
        <p>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
      </div>
    </React.Fragment>
  );
}

export default Pay;
