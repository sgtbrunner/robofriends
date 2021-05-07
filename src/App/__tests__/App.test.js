import { screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';

import App from '../App';
import ROBOTS from '../../mocks/users';
import server from '../../mocks/server';
import { USERS_URL } from '../../utils/api.utils';
import { mountComponent } from '../../utils/test.utils';

const ALERT = 'alert';
const HEADING = 'heading';
const IMAGE = 'img';
const ROBOT = 'robot';
const SEARCHBOX = 'searchbox';

describe('App', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent({ component: App });
    expect(container).toMatchSnapshot();
  });

  it(`loads, renders the robots information and filters cards according
    to user input`, async () => {
    mountComponent({ component: App });

    // shows loading component on start
    const alert = screen.getByRole(ALERT);
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/loading/i);

    // alert no longer appears on page
    await waitForElementToBeRemoved(() => screen.queryByRole(ALERT));

    // // it should render the title
    const title = screen.getByRole(HEADING, { name: /robofriends/i });
    expect(title).toBeInTheDocument();

    // it should render a searchbox
    const searchbox = screen.getByRole(SEARCHBOX);
    expect(searchbox).toBeInTheDocument();

    // it should render the cards
    let cardImages = screen.getAllByRole(IMAGE, { name: ROBOT });
    expect(cardImages).toHaveLength(5);
    ROBOTS.forEach((robot) => {
      const cardName = screen.getByRole(HEADING, { name: robot.name });
      const cardEmail = screen.getByText(robot.email);
      expect(cardName).toBeInTheDocument();
      expect(cardEmail).toBeInTheDocument();
    });

    // it shows two (2) filtered cards when user inputs "super"
    userEvent.clear(searchbox);
    userEvent.type(searchbox, 'super');

    cardImages = screen.getAllByRole(IMAGE, { name: ROBOT });
    expect(cardImages).toHaveLength(2);

    // // it shows one (1) filtered card when user inputs "guard"
    userEvent.clear(searchbox);
    userEvent.type(searchbox, 'guard');

    cardImages = screen.getAllByRole(IMAGE, { name: ROBOT });
    // eslint-disable-next-line jest-dom/prefer-in-document
    expect(cardImages).toHaveLength(1);
  });

  it(`fails to fetch data and there is a problem getting the robots 
  information`, async () => {
    server.resetHandlers(rest.get(USERS_URL, (req, res, ctx) => res(ctx.status(500))));

    mountComponent({ component: App });

    // shows loading alert on start
    const alert = screen.getByRole(ALERT);
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/loading/i);

    // alert changes from loading to error
    await waitFor(() => {
      expect(alert).toHaveTextContent(/an error occurred. please try again later!/i);
    });
  });
});
