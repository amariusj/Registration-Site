import React from 'react';

const Schedule = () => {
  return(
    <div>
      <h1 id="schedule" className="display-4 text-center my-5 text-muted">Schedule</h1>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Keynote: Internet of Things</h5>
            <span className="badge badge-pill badge-info p-2">9:00am</span>
          </div>
          <p className="mb-1">NodeStradamus</p>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">React Basics</h5>
            <span className="badge badge-pill badge-info p-2">10:00am</span>
          </div>
          <p className="mb-1">Vivianne McVue</p>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Hey, Mongo!</h5>
            <span className="badge badge-pill badge-info p-2">11:00am</span>
          </div>
          <p className="mb-1">Jay Query</p>
        </li>
        <li className="list-group-item list-group-item-success">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Lunch</h5>
            <span className="badge badge-pill badge-info p-2">12:00pm</span>
          </div>
          <p className="mb-1">Free pizza for everyone!</p>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Introducing ES2015</h5>
            <span className="badge badge-pill badge-info p-2">1:00pm</span>
          </div>
          <p className="mb-1">Ecma Scriptnstuff</p>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">Getting Started With Redux</h5>
            <span className="badge badge-pill badge-info p-2">2:00pm</span>
          </div>
          <p className="mb-1">Robbie Redux</p>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">What's Babel?</h5>
            <span className="badge badge-pill badge-info p-2">3:00pm</span>
          </div>
          <p className="mb-1">Json Babel</p>
        </li>
      </ul>
    </div>
  );
}

export default Schedule
