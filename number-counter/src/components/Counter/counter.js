import React, { useState } from "react"
import "./counter.css"

function Counter(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Deacrease</button>
      <p>Counter: {count}</p>
    </div>
  )
}

export default Counter
