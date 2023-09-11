import React, { useState } from "react"

 const App = () => {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(0);
  

  const change = (e) => {
    setTodo(e.target.value)
  }
  const handSub = (e) => {
  e.preventDefault();
  setTodo(""); 

if(editId){
  const editTodo = todos.find((i)=> i.id === editId);
  const updatedTodos = todos.map( (t)=> 
   t.id === editTodo.id
   ? (t = {id : t.id, todo})
   : { id: t.id, todo: t.todo}
  );
  setTodos(updatedTodos);
  setEditId(0)
  setTodo("")
  return
}



  if(todo !== ''){
    setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
  }
};
const delHand = (id) => {
  const deltodo  = todos.filter((to) => to.id !== id);
setTodos([...deltodo]);
}
const handEdit = (id)=> {
const editTodo = todos.find( (i)=> i.id === id);
setTodo(editTodo.todo);
setEditId(id)
}
  return (
    <>
    <div className="app">
    <div className="container">
      <h2>~ Todo List ~</h2>
      <form className="todoform" onSubmit={ handSub} >
        <input type="text" onChange={change} value={todo}/>
        <button type="submit">{editId?"Edit" : "Add"} </button>
        </form>
        <ul className="alltodos">
      {todos.map( (t)=> 
        <li className="singletodo"><span className="todotext" key={t.id}>{t.todo}</span>
        <button onClick={()=>handEdit(t.id)}>Edit</button>&nbsp;
        <button onClick={()=>delHand(t.id)}>Delete</button>
          </li>
          )}
          </ul>

    </div>
    </div></>
  )
}
export default App;