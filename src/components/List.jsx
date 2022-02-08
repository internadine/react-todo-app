import React, { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

function List(props) {
    const [done, setDone] = useState(false)

    function handleClick() {
        setDone(prevValue => {
            return prevValue = !prevValue
        })
    }
    function onTrash() {
        props.toTrash(props.id)
    }

    return <div><li onClick={handleClick} style={{ textDecoration: done ? 'line-through' : 'none' }}>{props.todo} {done ? <DeleteIcon onClick={onTrash} className="trashbin"></DeleteIcon> : null}</li>
    </div>
}

export default List;