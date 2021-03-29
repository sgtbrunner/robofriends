/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper;

beforeEach(() => {
  const mockProps = {
    robots: [],
    searchField: '',
  };

  wrapper = shallow(<App {...mockProps} />);
});

it('renders App without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly I', () => {
  const mockProps2 = {
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'locke@hotmail.com',
      },
    ],
    searchField: 'a',
  };

  const wrapper2 = shallow(<App {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly II', () => {
  const mockProps2 = {
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'locke@hotmail.com',
      },
    ],
    searchField: 'a',
  };

  const wrapper2 = shallow(<App {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual({
    id: 3,
    name: 'John',
    email: 'locke@hotmail.com',
  });
});
