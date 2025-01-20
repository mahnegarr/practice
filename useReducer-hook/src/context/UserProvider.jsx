
import React, { createContext, useState } from "react"

export const UserContext = React.createContext()
function UserProvider({children}) {
    const [users, setUsers] = useState([
        { id: 1, name: "mah" },
        { id: 2, name: "asho" },
        { id: 3, name: "janan" }
    ])
    return (
      <UserProvider.provider value={{users,setUsers}}>
{children}
      </UserProvider.provider>
    )
}

export default UserProvider