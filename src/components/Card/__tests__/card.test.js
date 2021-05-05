import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import Card from '../index';

const props = {
  id: 1,
  name: 'Baby Yoda',
  email: 'baby.yoda@newrepublic.com',
};

describe('Card component', () => {
  describe('render', () => {
    test('expect Card component to match snapshot', () => {
      const { container } = mountComponent({ component: Card, props });
      expect(container).toMatchSnapshot();
    });

    test('check component child elements', () => {
      mountComponent({ component: Card, props });

      // check image
      const image = screen.getByRole('img', { name: 'robot' });
      expect(image).toBeInTheDocument();

      // check name
      const name = screen.getByRole('heading', { name: props.name });
      expect(name).toBeInTheDocument();

      // check email
      const email = screen.getByText(props.email);
      expect(email).toBeInTheDocument();
    });
  });
});
