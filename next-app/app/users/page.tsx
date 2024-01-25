import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users'); //res is the response
  const users: User[] = await res.json(); //uses the typescript to identify each property and translates it to json format
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage