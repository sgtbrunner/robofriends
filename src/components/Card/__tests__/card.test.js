import React from 'react';
import { shallow } from 'enzyme';
import Card from '../card.component';

let wrapper;
const mountComponent = (props) => shallow(<Card {...props} />);
const mockProps = {
  id: 1,
  name: 'Pep Guardiola',
  email: 'pep.guardiola@gmail.com',
};

beforeEach(() => {
  wrapper = mountComponent(mockProps);
});

describe('Card component', () => {
  describe('render', () => {
    it('expect Card component to match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('expect Card component to have mock name', () => {
      expect(wrapper.find('h2').text()).toEqual(mockProps.name);
    });

    it('expect Card component to have mock email', () => {
      expect(wrapper.find('p').text()).toEqual(mockProps.email);
    });
  });
});
