export const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export default {
  getUsers: () =>
    fetch(USERS_URL).then((response) => {
      if (response.ok) return response.json();
      throw new Error('Something went wrong');
    }),
};
