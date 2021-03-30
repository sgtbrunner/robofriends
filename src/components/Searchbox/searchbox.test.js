import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './searchbox.component';

const mountComponent = () => shallow(<SearchBox />);

describe('Searchbox component', () => {
  describe('render', () => {
    it('expect SearchBox component to match snapshot', () => {
      const wrapper = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
