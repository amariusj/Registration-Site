import React from 'react';

const Footer = () => {
  return(
    <div className="row py-3">
			<div className="col-md-7">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#home">Tracks</a>
          </li>
        </ul>
			</div>
			<div className="col-md text-md-right">
				<small>&copy; 2019 Full Stack Conf &amp; Amarius Jones</small>
			</div>
		</div>
  );
}

export default Footer;
