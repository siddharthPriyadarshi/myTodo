import './App.css';
import Header from './MyComponents/Header.js'
import Footer from './MyComponents/Footer.js'
import Todos from './MyComponents/Todos.js'
import AddToDo from './MyComponents/AddToDo.jsx';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) =>{
    let sno;
    if (todos.length === 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length - 1].sno +1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      description: desc  
    }
    setTodos([...todos, myTodo]);
  };

  const onDelete = (todo)=> {
    setTodos(todos.filter((e) => {
      return (e !== todo)
    }))
    localStorage.setItem("todos",JSON.stringify(todos));

  };

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])

  return ( 
    <>
      <Header/>
      <AddToDo addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete= {onDelete}/>
      <Footer/>
    </>   
  );
}

export default App;