import React from 'react';
import { shallow } from 'enzyme';
import Error from '../error-boundary.component';

const mountComponent = () => shallow(<Error />);

describe('Error component', () => {
  describe('render', () => {
    it('expect Error component to match snapshot', () => {
      const wrapper = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
