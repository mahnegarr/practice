import React, { useEffect } from 'react'

function Counter() {

    useEffect(() => { 
        return ()=>{
            console.log("unmounting");
            
        }
     }, [])
    return (
        <div>Counter</div>
    )
}

export default Counter