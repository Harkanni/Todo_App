import { useState } from "react"

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true)
    let output
    if(display){
        output = <h3>This is a conditional component</h3>
    } else {
        output = <h3>Nothing to see here</h3>
    }

    return <div>{output}</div>
}