import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users', { cache: 'no-store' }); //res is the response, cache no store removes the caching aka temp data, you can also use next: { revalidate: 10 } seconds
  const users: User[] = await res.json(); //uses the typescript to identify each property and translates it to json format
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage