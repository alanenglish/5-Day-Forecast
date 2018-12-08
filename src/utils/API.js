// const SERVER_URL = '/api';
const FORECASTS_URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

// export default async function fetchForecasts(woe) {
//   const response = await fetch(`${SERVER_URL}/${woe}`);
//   return await response.json();
// }

export default async function fetchForecasts(woe) {
  const response = await fetch(`${FORECASTS_URL}/${woe}`);
  return await response.json();
}
