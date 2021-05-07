import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import Searchbox from '../index';

describe('Searchbox component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent({
      component: Searchbox,
      props: { searchChange: jest.fn() },
    });
    expect(container).toMatchSnapshot();
  });

  it('check component placeholder text', () => {
    mountComponent({ component: Searchbox });
    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();
  });
});
