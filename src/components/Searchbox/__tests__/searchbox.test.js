import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import Searchbox from '../index';

describe('Searchbox component', () => {
  test('should match snapshot', () => {
    const { container } = mountComponent({ component: Searchbox });
    expect(container).toMatchSnapshot();
  });

  test('check component placeholder text', () => {
    mountComponent({ component: Searchbox });
    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();
  });
});
