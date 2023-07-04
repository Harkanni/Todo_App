import { useState } from "react";

function FunctionalCounter() {
    const [counter, setCounter] = useState(0, 0)
    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 2)
    }
    return <div>
        <div>Counter Value: {counter}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
}


export default FunctionalCounter;