import React from 'react'

const UsersPage = () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  return (
    <div>UsersPage</div>
  )
}

export default UsersPage