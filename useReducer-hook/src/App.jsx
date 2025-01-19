import { useReducer, useState } from 'react'
const initialState = { count: 0, number: 1 }
const reducer = (state, action) => {

  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + 1 }
    case "Decrease":
      return { ...state, count: state.count - 1 }
    case "Reset":
      return { ...state, count: state.count = 0 }
    case "IncreaseByAmount":
      return { ...state, count: state.count + action.payload }
    case "numberIncrease":
      return { ...state, number: state.number + 1 }
    default:
      break;
  }

}
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const increaseHandler = () => {
    dispatch({ type: "Increase" })
  }

  const resetHandler = () => {
    dispatch({ type: "Reset" })
  }

  const decreaseHandler = () => {
    dispatch({ type: "Decrease" })
  }

  const increaseByAmount = () => {
    dispatch({ type: "IncreaseByAmount", payload: 10 })

  }

  const numIncreaseHandler = () => {
    dispatch({ type: "numberIncrease" })
  }

  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={increaseHandler}>up</button>
        <button onClick={increaseByAmount} >Increase By Amount</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={decreaseHandler}>down</button>
        <hr />
        <p>{state.number}</p>
        <button onClick={numIncreaseHandler}>Up </button>
      </div>
    </>
  )
}

export default App
