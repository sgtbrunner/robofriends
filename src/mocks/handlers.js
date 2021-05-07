import { rest } from 'msw';

import USERS from './users';
import { USERS_URL } from '../utils/api.utils';

const handlers = [
  rest.get(USERS_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(USERS));
  }),
];

export default handlers;
