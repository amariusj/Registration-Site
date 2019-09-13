import React from 'react';

const Footer = () => {
  return(
    <div className="row py-3">
			<div className="col-md-7">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tracks</a>
          </li>
          <li className="nav-item">
            <div className="btn-group dropup">
              <button type="button" className="btn btn-outline-secondary">Other Confs</button>
              <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">CSS Conf</a>
                <a className="dropdown-item" href="#">Python Conf</a>
                <a className="dropdown-item" href="#">Java Conf</a>
                <a className="dropdown-item" href="#">Swift Conf</a>
              </div>
            </div>
          </li>
        </ul>
			</div>
			<div className="col-md text-md-right">
				<small>&copy; 2017 Full Stack Conf &amp; Treehouse</small>
			</div>
		</div>
  );
}

export default Footer;
