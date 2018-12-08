const path = require('path');
const express = require('express');
const request = require('request');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/api/:woe', (req, response) => {
  const URL = `https://www.metaweather.com/api/location/${req.params.woe}`;

  request.get({
    url: URL,
    json: true,
    headers: { 'User-Agent': 'request' }
  }, (err, res, data) => {
    if (err) {
      response.status(500).json({ status: res.statusCode, error: 'Something went wrong, please try again.' });
    } else if (res.statusCode !== 200) {
      response.status(404).json({ status: res.statusCode, error: 'Location not found, please enter a valid WOE ID.' });
    } else {
      response.json({ status: res.statusCode, data });
    }
  });
});

app.get('*', (req, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up.');
});
