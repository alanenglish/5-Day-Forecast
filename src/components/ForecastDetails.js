import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = ({ forecast }) => (
  <li className="list-inline-item forecast-item">
    <div className="forecast-item__date">
      {moment(forecast.applicable_date).format('dddd')}
    </div>
    <img
      className="forecast-item__img"
      alt={forecast.weather_state_name}
      src={`https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`}
    />
    <div className="forecast-item__description" >
      {forecast.weather_state_name}
    </div>
    <div className="forecast-item__hi-low" >
      Hi: <span className="hi-temp">{Math.floor((forecast.max_temp * (9 / 5)) + 32)}</span>
      Low: <span className="low-temp">{Math.floor((forecast.min_temp * (9 / 5)) + 32)}</span>
    </div>
  </li>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.object
};

ForecastDetails.defaultProps = {
  forecast: null
};

export default ForecastDetails;
