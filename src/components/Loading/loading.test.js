import React from 'react';
import { shallow } from 'enzyme';
import Loading from './loading.component';

const mountComponent = () => shallow(<Loading />);

describe('Loading component', () => {
  describe('render', () => {
    it('expect Loading component to match snapshot', () => {
      const wrapper = mountComponent();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
