import React, { useEffect, useState } from 'react'

function Photos() {
    const [isShow, setIsShow] = useState(false)
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setIsShow(isShow => !isShow)
        setIsShow(isShow => !isShow)
        setCount( count + 1)
        setCount( count + 1)
        setCount( count + 1)
        setIsShow("new Text")
    }

    return (
        <div>
            <h1>
                Botostart
            </h1>
            {isShow && <h3>React Course</h3>}
            <p>{count}</p>
            <button onClick={clickHandler} >Toggle</button>
        </div>
    )
}

export default Photos