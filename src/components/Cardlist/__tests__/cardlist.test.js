import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import USERS from '../../../mocks/users';
import Cardlist from '../index';

const props = {
  robots: USERS,
};

describe('Cardlist component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent({ component: Cardlist, props });
    expect(container).toMatchSnapshot();
  });

  it('should render five (5) cards if robots has 5 valid items', () => {
    mountComponent({ component: Cardlist, props });
    const cards = screen.getAllByRole('img', { name: 'robot' });
    expect(cards).toHaveLength(5);
  });

  it('should render no (0) cards if robots has no valid items', () => {
    mountComponent({ component: Cardlist, props: { robots: [] } });
    const cards = screen.queryByRole('img', { name: 'robot' });
    expect(cards).not.toBeInTheDocument();
  });
});
