import React from 'react';
import { toast } from 'react-toastify';
import ForecastDetails from './ForecastDetails';
import Loading from './Loading';
import SearchBar from './SearchBar';
import fetchForecasts from '../utils/API';

class Forecast extends React.Component {
  constructor() {
    super();

    this.state = {
      forecasts: [],
      city: '',
      state: '',
      error: '',
      isLoading: false
    };
  }

  onSubmit = (woe) => {
    this.setState({
      isLoading: true,
      forecasts: []
    });

    this.fetchWeatherForecast(woe);
  }

  async fetchWeatherForecast(woe) {
    this.setState({ error: '' });
    const response = await fetchForecasts(woe);

    if (response.detail) {
      this.setState({
        error: 'Location not found, please enter a valid WOE ID.',
        isLoading: false
      });
    } else {
      this.setState({
        forecasts: response.consolidated_weather.slice(0, 5),
        city: response.title,
        state: response.parent.title,
        isLoading: false
      });
    }
  }

  displayForecastItems = () => this.state.forecasts.map((forecast) => <ForecastDetails key={forecast.id} forecast={forecast} />);

  render() {
    const { isLoading, error, forecasts } = this.state;
    if (error) toast.error(error);
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        { isLoading ?
          <Loading />
        :
          <div className={`forecast-container ${!forecasts.length ? 'empty-state__background-img' : ''}`}>
            { !this.state.forecasts.length &&
              <div className="empty-state">
                <p className="empty_state__message">
                  Please enter a WOE ID in order to display forecast. Try running through the index for your WOE's.
                </p>
                <em className="empty-state__drake">-Drake</em>
              </div>
            }
            { !!this.state.forecasts.length &&
              <div>
                <div className="location">
                  {this.state.city}, {this.state.state}
                </div>
                <ul className="list-inline forecast-list">
                  {this.displayForecastItems()}
                </ul>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default Forecast;
