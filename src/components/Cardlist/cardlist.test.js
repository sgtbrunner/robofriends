import React from 'react';
import { shallow } from 'enzyme';
import Cardlist from './cardlist.component';

it('expect to render Card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Locke',
      username: 'locke',
      email: 'locke@gmail.com',
    },
  ];
  expect(shallow(<Cardlist robots={mockRobots} />).debug()).toMatchSnapshot();
});
