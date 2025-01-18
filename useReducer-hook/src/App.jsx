import { useReducer, useState } from 'react'

const reducer = (state, action) => {

  switch (action) {
    case "Increase":
      return state + 1
    case "Decrease":
      return state - 1
    case "Reset":
      return state = 0
    default:
      break;
  }

}
function App() {

  const [count, dispatch] = useReducer(reducer, 0)

  const increaseHandler = () => {
    dispatch("Increase")
  }

  const resetHandler = () => {
    dispatch("Reset")
  }

  const decreaseHandler = () => {
    dispatch("Decrease")
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increaseHandler}>up</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={decreaseHandler}>down</button>
      </div>
    </>
  )
}

export default App
