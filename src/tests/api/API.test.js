import fetchForecasts from '../../utils/API';
import { forecastData } from '../../utils/forecastData';
/* eslint-env jest */

describe('API', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json: () => (Promise.resolve({ consolidated_weather: forecastData }))
        });
      });
    });
  });

  describe('fetchForecasts', () => {
    it('should fetch weather forecasts', async () => {
      expect.assertions(2);
      const woeId = '44418';
      const forecasts = await fetchForecasts(woeId);

      expect(global.fetch).toHaveBeenCalledWith(`/api/${woeId}`);
      expect(forecasts).toEqual({ consolidated_weather: forecastData });
    });
  });
});
