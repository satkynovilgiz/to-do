
import { useState } from 'react'
import './App.css'

function App() {
  const [toDo, setTodo]=useState("")
  const [task, setTask]=useState([])

  function addTask(){
    if(toDo==='') return;
    setTask([...task, toDo]);
    setTodo("")
  }
function removeTask(index){
  setTask(task.filter((_,i)=> i !== index))
} 
  return (
    <>
    <div className="ToDo">
      <h1>To-Do List with React</h1>


<input type="text" value={toDo} placeholder='write here new text'
onChange={(e)=>{
  setTodo(e.target.value)
}}
onKeyDown={(e)=>{
  if (e.key === "Enter")
    addTask()
}}
/>
<button onClick={addTask}> ADD</button>
<ul >
  {
    task.map(( item,index,)=>(
      <div style={{display:'flex', alignItems:"center"}}>

        <li key={index}>{item}</li>
        <button onClick={()=>removeTask(index)}>
          X
        </button>
      </div>
    ))
    
  }
</ul>
    </div>
    </>
  )
}

export default App
