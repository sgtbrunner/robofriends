import React from 'react';
import { shallow } from 'enzyme';
import ErrorAlert from '../error-alert.component';

const mountComponent = () => shallow(<ErrorAlert />);

describe('ErrorAlert component', () => {
  describe('render', () => {
    it('expect ErrorAlert component to match snapshot', () => {
      const wrapper = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
