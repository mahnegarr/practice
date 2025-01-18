import { useReducer, useState } from 'react'

const reducer = (state, action) => {

  switch (action.type) {
    case "Increase":
      return state + 1
    case "Decrease":
      return state - 1
    case "Reset":
      return state = 0
    case "IncreaseByAmount":
      return state + action.payload
    default:
      break;
  }

}
function App() {

  const [count, dispatch] = useReducer(reducer, 0)

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

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increaseHandler}>up</button>
        <button onClick={increaseByAmount} >Increase By Amount</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={decreaseHandler}>down</button>
      </div>
    </>
  )
}

export default App
