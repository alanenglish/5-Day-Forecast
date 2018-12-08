import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import SearchBar from './SearchBar';
import Loading from './Loading';
import fetchForecasts from '../utils/API';
// import { forecastData } from '../utils/forecastData';

class Forecast extends Component {
  constructor() {
    super();

    this.state = {
      forecasts: [],
      error: '',
      isLoading: false
    };
  }

  onSearchSubmit = (woe) => {
    this.setState({ isLoading: true });
    this.fetchWeatherForecast(woe);
  }

  async fetchWeatherForecast(woe) {
    this.setState({ error: '' });
    const response = await fetchForecasts(woe);
    console.log('Response', response);
    console.log('This line should not run until my response is resolved.');
    // if (response.status !== 200) {
    if (response.detail) {
      console.log('This line should ONLY run when I hit an error.');
      this.setState({
        // error: response.error,
        error: 'Location not found, please enter a valid WOE ID.',
        isLoading: false
      });
    } else {
      console.log('This line should run when I DO NOT hit an error.');
      console.log('Consolidated Forecasts:', response.consolidated_weather.slice(0, 5));
      // console.log('Consolidated Forecasts:', response.data.consolidated_weather.slice(0, 5))
      this.setState({
        forecasts: response.consolidated_weather.slice(0, 5),
        // forecasts: response.data.consolidated_weather.slice(0, 5),
        isLoading: false
      });
    }
  }

  render() {
    const { isLoading, error } = this.state;
    if (error) toast.error(error);
    return (
      <Fragment>
        <SearchBar fetchForecast={this.onSearchSubmit} />
        { isLoading && <Loading /> }
      </Fragment>
    );
  }
}

export default Forecast;
