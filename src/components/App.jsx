import React, { useState } from "react"
import List from "../components/List"
import Input from "../components/Input"


function App() {
    const [list, setList] = useState([])

    function addToDo(toDo) {
        setList(prevValue => {
            return [...prevValue, toDo]
        })

    }

    function deleteToDo(id) {
        setList(prevValue => {
            return prevValue.filter((item, index) => {
                return id != index
            })
        })
    }

    return <div className="container">
        <div className="heading">
            <h1>Nadine's ToDo's</h1>
        </div>
        <Input onAdd={addToDo} />
        <div><ul>
            {list.map((item, index) => {
                return <List todo={item} key={index} id={index} toTrash={deleteToDo} />
            })}


        </ul></div>
    </div>
}

export default App;