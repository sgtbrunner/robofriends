import React from 'react';
import { shallow } from 'enzyme';
import Card from './card.component';

it('expect to render Card component', () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
