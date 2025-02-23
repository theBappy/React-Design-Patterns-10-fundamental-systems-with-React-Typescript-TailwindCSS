import { useState } from "react"


const RenderCounter = ({render}: any) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <button onClick={increment}>Increment</button>
        {render(count)}
    </div>
  )
}

export default RenderCounter