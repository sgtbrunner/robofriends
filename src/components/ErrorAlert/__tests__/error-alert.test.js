import { screen } from '@testing-library/react';

import { mountComponent } from '../../../utils/test.utils';
import ErrorAlert from '../index';

describe('ErrorAlert component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent({ component: ErrorAlert });
    expect(container).toMatchSnapshot();
  });

  it('check component error text', () => {
    mountComponent({ component: ErrorAlert });
    const errorTitle = screen.getByRole('heading', { name: 'Oooopsss...' });
    expect(errorTitle).toBeInTheDocument();

    const errorText = screen.getByRole('heading', {
      name: /an error occurred. please try again later!/i,
    });
    expect(errorText).toBeInTheDocument();
  });
});
