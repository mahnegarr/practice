import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider';


function UsersList() {
    const users = useContext(UserContext)
    console.log(users);
    
  return (
    <div></div>
  )
}

export default UsersList