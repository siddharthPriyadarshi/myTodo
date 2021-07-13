import React from "react";
import Todoitem from "../MyComponents/Todoitem.js";

export default function Todo(props) {
  return (
    <div className="container">
      <h3 className="text-center"> Todos List </h3>
      {
        props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todoItem) => {
          return (
           <>
              <Todoitem todo={todoItem} key = {todoItem.sno} onDelete=    {props.onDelete} /><hr/>
            </>
         )
        })
      }
    </div>
  );
}
  