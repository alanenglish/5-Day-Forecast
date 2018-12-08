import React from 'react';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <i className="fa fa-cloud header-content__img" />
      <h1 className="header-content__title">5-Day Forecast</h1>
      <a href="http://www.woeidlookup.com/" className="header-content__link" target="_blank">
        WOE ID Lookup
      </a>
    </div>
  </div>
);

export default Header;
