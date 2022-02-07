import React, { useState } from "react"

function Input(props) {
    const [todo, setTodo] = useState("")

    function handleChange(event) {
        const toDo = event.target.value
        setTodo(toDo)
    }

    function handleClick() {
        props.onAdd(todo)
        setTodo("")
    }

    return <div className="form" >
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleClick}><span>Add</span></button>
    </div>
}

export default Input;