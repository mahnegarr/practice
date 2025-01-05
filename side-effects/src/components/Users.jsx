import React, { useState } from 'react'
import { useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const json = await res.json()
                setUsers(json)
            } catch (error) {
                setError(true)

            }
        }
        fetchUsers()
    }, [])

    return (
        <div>
            {!users.length && !error && <p>Loading</p>}

            <ul>{users.map(user => (<li key={user.id} >{user.name}</li>))}</ul>

            {error && <h3>Something went wrong!!!</h3>}
        </div>
    )
}

export default Users