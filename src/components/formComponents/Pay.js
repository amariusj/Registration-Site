import React from 'react';

const Pay = () => {
  return(
    <React.Fragment>
      <div className="form-row">
        <div className="col-lg-6 form-group">
          <label htmlFor="cc-num">Card Number:</label>
          <input className="form-control" id="cc-num" type="text"></input>
        </div>
        <div className="col-lg form-group">
          <label htmlFor="zip">Zip Code:</label>
          <input className="form-control" id="zip" type="text"></input>
        </div>
        <div className="col-lg form-group">
          <label htmlFor="cvv">CVV:</label>
          <input className="form-control" id="cvv" type="text"></input>
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
    </React.Fragment>
  );
}

export default Pay;
