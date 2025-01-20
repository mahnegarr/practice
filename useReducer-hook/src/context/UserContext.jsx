
import React, { createContext, useState } from "react"

export const UserContext = React.createContext()
function UserContext() {
    const [users, setUsers] = useState([
        { id: 1, name: "mah" },
        { id: 2, name: "asho" },
        { id: 3, name: "janan" }
    ])
    return (
        <div><UserContext.provider>
        </UserContext.provider></div>
    )
}

export default UserContext