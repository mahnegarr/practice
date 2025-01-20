import React, { useEffect, useReducer } from 'react'

const initialState = { isLoding: true, error: "", data: [] }

const reducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case "SUCCESS":
            return { ...state, isLoding: false, data: action.payload }
        case "ERROR":
            return { data: [], isLoding: false, error: action.payload }

    }

}
function HttpReq() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                const json = await res.json()
                dispatch({ type: "SUCCESS", payload: json })
            } catch (error) {
                dispatch({ type: "ERROR", payload: "ridi" })
            }
        }

        getData()
    }, [])
    return (
        <div>
            {state.isLoding && <p>Is LOADING !!!!!!!!</p>}
            <div>
                {state.data.map(post => <p key={post.id}>{post.title}</p>)}
            </div>

            {!!state.error && <p>{state.error}</p>}
        </div>
    )
}

export default HttpReq