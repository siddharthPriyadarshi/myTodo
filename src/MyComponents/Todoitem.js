import React from 'react'

export default function Todoitem({todo, onDelete}) {
    return (
        <div className = "container my-4">
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button className = "btn btn-sm btn-danger" onClick ={() =>{onDelete(todo)}}>Delete</button>
                       
        </div>
    )
}
