import React, { useState } from "react"

function Counter(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Copy That</button>
    </div>
  )
}

export default Counter
