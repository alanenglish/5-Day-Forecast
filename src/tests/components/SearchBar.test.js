import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';
/* eslint-env jest */

let onSubmitSpy;

beforeEach(() => {
  onSubmitSpy = jest.fn();
});

test('should render SearchBar correctly', () => {
  const wrapper = shallow(<SearchBar onSubmit={onSubmitSpy} />);
  expect(wrapper).toMatchSnapshot();
});

test('should set WOE ID on input change', () => {
  const value = 44418;
  const wrapper = shallow(<SearchBar onSubmit={onSubmitSpy} />);

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('woeId')).toBe(value);
});

test('should call onSubmit prop for valid for submission', () => {
  const wrapper = shallow(<SearchBar onSubmit={onSubmitSpy} />);
  const value = 44418;

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  expect(onSubmitSpy).toHaveBeenLastCalledWith(value);
  expect(wrapper.state('woeId')).toBe('');
});
