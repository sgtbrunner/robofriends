/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Card from './card.component';

it('expect to render Card component', () => {
  expect(
    shallow(<Card name="Pep Guardiola" email="pep.guardiola@gmail.com" id={0} />).debug()
  ).toMatchSnapshot();
});
