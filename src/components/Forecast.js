import React from 'react';
import SearchBar from './SearchBar';

class Forecast extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      forecasts: []
    };
  }

  onSubmitForecast = (woe) => {
    console.log('hi');
  }

  render() {
    return (
      <SearchBar fetchForecast={this.onSubmitForecast} />
    );
  }
}

export default Forecast;
