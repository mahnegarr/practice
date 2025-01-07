import React, { useState } from 'react'
import { useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [id, setId] = useState("")

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


    const searchHandler = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const json =await res.json()
       console.log(json);
       
    }


    return (
        <div>
            <input type='text' placeholder='enter id' value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={searchHandler} >search</button>
            {!users.length && !error && <p>Loading</p>}

            {/* <ul>{users.map(user => (<li key={user.id} >{user.name}</li>))}</ul> */}

            {error && <h3>Something went wrong!!!</h3>}
        </div>
    )
}

export default Users