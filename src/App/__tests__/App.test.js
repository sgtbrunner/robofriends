import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const mockProps = {
  error: null,
  loading: false,
  robots: [
    {
      id: 3,
      name: 'John',
      email: 'locke@hotmail.com',
    },
  ],
  searchField: '',
};

const mountComponent = ({ props = mockProps, newProps }) => mount(<App {...props} {...newProps} />);

describe('App page', () => {
  describe('render', () => {
    it('expect App component to match snapshot', () => {
      const wrapper = mountComponent({});
      expect(wrapper).toMatchSnapshot();
    });
  });
});
