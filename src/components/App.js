
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";
const App = () => {

  let [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Built a React app", completed: false },
    { id: 3, task: "Deploy a React app", completed: false }
  ])

  function handleComplete(id){

    setTodos((prev)=>{
      return prev.map((todo)=>{
        return todo.id==id ? {...todo,completed:true}:todo
      })
    })


  }

  return (
    <div>
      <h1>Parents Component</h1>
      <Child
        list={todos}
func= {handleComplete}
/>
      {/* Do not remove the main div */}
    </div>
  )
}

export default App
