import React from 'react';
import { shallow } from 'enzyme';
import Forecast from '../../components/Forecast';
import { forecastData } from '../../utils/forecastData';
/* eslint-env jest */

test('should render Forecast component correctly when no forecasts present', () => {
  const wrapper = shallow(<Forecast />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Forecast component correctly when forecasts are present', () => {
  const wrapper = shallow(<Forecast />);
  wrapper.setState({
    forecasts: forecastData,
    city: 'London',
    state: 'England',
    error: '',
    isLoading: false
  });

  expect(wrapper).toMatchSnapshot();
});
