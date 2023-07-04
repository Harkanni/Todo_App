import { useState } from "react"

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(false)
    
    return display ? <div><h3>This is a conditional component</h3></div> : <h3>Nothing to see here</h3>



}