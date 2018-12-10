import React from 'react';
import { shallow } from 'enzyme';
import ForecastDetails from '../../components/ForecastDetails';
/* eslint-env jest */

let forecast;

beforeEach(() => {
  forecast = {
    id: 5120283761442816,
    weather_state_name: 'Light Rain',
    weather_state_abbr: 'lr',
    applicable_date: '2018-12-08',
    min_temp: 7.9325,
    max_temp: 12.5
  };
});

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ForecastDetails forecast={forecast} />);
  expect(wrapper).toMatchSnapshot();
});
