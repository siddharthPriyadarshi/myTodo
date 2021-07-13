import React from 'react' ;
import {useState} from 'react' ;

export default function AddToDo({addTodo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => { 
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Desc cannot be blank");
    }
    else{
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }    
  };
  return (
    <div className = "container">
      <form onSubmit = {submit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">ToDo Title</label>
          <input type="text" value = {title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Description</label>
          <input type="text" value = {desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
      </form>
    </div>
  )
}
