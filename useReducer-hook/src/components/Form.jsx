import React, { useContext, useState } from 'react'
import { UserContext } from '../App'

function Form() {
    const [text,setText] = useState("")
    const {setUsers,users} = useContext(UserContext)

    const addHandler = ()=>{
setUsers(users=>([...users,{id:Math.floor(Math.random() *100),name:text}]))
    }
    
  return (
    <div>
        <input value={text} onChange={e=> setText(e.target.value)} type="text" />
        <button onClick={addHandler} >Add</button>
    </div>
  )
}

export default Form