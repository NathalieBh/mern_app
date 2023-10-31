import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Berwa Hav',
      image:
        'https://images.unsplash.com/photo-1543366749-f3000e798cbc?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
      places: 2,
    },
  ];
  console.log(USERS);
  return <UsersList items={USERS} />;
};

export default Users;
