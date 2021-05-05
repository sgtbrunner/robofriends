import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import Loading from '../index';

describe('Loading component', () => {
  test('should match snapshot', () => {
    const { container } = mountComponent({ component: Loading });
    expect(container).toMatchSnapshot();
  });

  test('check component loading text', () => {
    mountComponent({ component: Loading });
    const loading = screen.getByRole('heading', { name: /loading/i });
    expect(loading).toBeInTheDocument();
  });
});
