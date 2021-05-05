import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import Cardlist from '../index';

const props = {
  robots: [
    {
      id: 1,
      name: 'Baby Yoda',
      email: 'baby.yoda@newrepublic.com',
    },
    {
      id: 2,
      name: 'Pep Guardiola',
      email: 'pep.guardiola@mancity.co.uk',
    },
    {
      id: 3,
      name: 'Bruenor Battlehammer',
      email: 'bruenor.thedwar@forgottenrealms.com',
    },
    {
      id: 4,
      name: 'Tim Ferris',
      email: 'time.ferris@fourhourworkweek.net',
    },
    {
      id: 5,
      name: 'Alexander Supertramp',
      email: 'chris.mccandless@intothewild.com',
    },
  ],
};

describe('Cardlist component', () => {
  test('should match snapshot', () => {
    const { container } = mountComponent({ component: Cardlist, props });
    expect(container).toMatchSnapshot();
  });

  test('should render five (5) cards', () => {
    mountComponent({ component: Cardlist, props });
    const cards = screen.getAllByRole('img', { name: 'robot' });
    expect(cards).toHaveLength(5);
  });
});
