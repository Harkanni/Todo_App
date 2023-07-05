import { useState } from "react"
import ListItem from "./ListItem"
function Todo() {
    const [Todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
       setTodo(event.target.value) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let tempList = todoList
        tempList.push(Todo)
        setTodoList(tempList)

        setTodo('')


        console.log(todoList)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={Todo} onChange={handleChange} type="text"></input>
                <button type="submit">Add</button>
            </form>
            {todoList.map((todo, index) => (
                <ListItem key={index} name={todo}></ListItem>
            ))}
        </div>
    )
}

export default Todo