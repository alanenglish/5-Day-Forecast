// const EXPRESS_PROXY_SERVER_URL = '/api';

// export default async function fetchForecasts(woe) {
//   const response = await fetch(`${EXPRESS_PROXY_SERVER_URL}/${woe}`);
//   return await response.json();
// }

// function for build:dev and yarn start (express server proxy)
// async fetchWeatherForecast(woe) {
//   this.setState({ error: '' });
//   const response = await fetchForecasts(woe);

//   if (response.status !== 200) {
//     this.setState({
//       error: response.error,
//       isLoading: false
//     });
//   } else {
//     this.setState({
//       forecasts: response.data.consolidated_weather.slice(0, 5),
//       city: response.data.title
//       state: resonse.data.parent.title
//       isLoading: false
//     });
//   }
// }

const PROXY_URL = 'https://cors-anywhere.herokuapp.com';
const FORECASTS_URL = 'https://www.metaweather.com/api/location';

export default async function fetchForecasts(woe) {
  const response = await fetch(`${PROXY_URL}/${FORECASTS_URL}/${woe}`);
  return await response.json();
}

// function for webpack dev-server (heroku proxy)
// async fetchWeatherForecast(woe) {
//   this.setState({ error: '' });
//   const response = await fetchForecasts(woe);
//
//   if (response.detail) {
//     this.setState({
//       error: 'Location not found, please enter a valid WOE ID.',
//       isLoading: false
//     });
//   } else {
//     this.setState({
//       forecasts: response.consolidated_weather.slice(0, 5),
//       city: response.title,
//       state: response.parent.title,
//       isLoading: false
//     });
//   }
// }
