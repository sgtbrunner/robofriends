import { rest } from 'msw';

import { USERS_URL } from '../utils/api.utils';

const handlers = [
  rest.get(USERS_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),
];

export default handlers;
