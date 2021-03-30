import React from 'react';
import { shallow } from 'enzyme';
import Cardlist from './cardlist.component';
import Card from '../Card/card.component';

let wrapper;
const mountComponent = (props) => shallow(<Cardlist robots={props} />);
const mockRobots = [
  {
    id: 0,
    name: 'John Locke',
    email: 'locke@gmail.com',
  },
  {
    id: 1,
    name: 'Pep Guardiola',
    email: 'pep.guardiola@gmail.com',
  },
  {
    id: 2,
    name: 'Baby Yoda',
    email: 'baby.yoda@gmail.com',
  },
];

beforeEach(() => {
  wrapper = mountComponent(mockRobots);
});

describe('Cardlist component', () => {
  describe('render', () => {
    it('expect Cardlist component to match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('expect Cardlist component to render three (3) cards if props have 3 users', () => {
      expect(wrapper.find(Card).length).toEqual(3);
    });

    it('expect Cardlist component to render five (5) cards if props have 5 users', () => {
      const newMock = [
        ...mockRobots,
        {
          id: 3,
          name: 'Jon Snow',
          email: 'jon.snow@gmail.com',
        },
        {
          id: 4,
          name: 'Nelson Mandela',
          email: 'nelson.mandela@gmail.com',
        },
      ];
      wrapper = mountComponent(newMock);
      expect(wrapper.find(Card).length).toEqual(5);
    });
  });
});
