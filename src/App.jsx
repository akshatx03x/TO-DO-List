import React, { useState } from 'react'
import NavBar from './components/navBar'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleAdd = () => {
    if (!todo.trim()) return
    settodos([...todos, { id: uuidv4(), todo: todo.trim(), isCompleted: false }
    ])
    settodo("")
  }

  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
  if (confirmDelete) {
    settodos(todos.filter(item => item.id !== id));
  }
}


  const handleEdit = (id) => {
    const item = todos.find(item => item.id === id)
    settodo(item.todo)
    settodos(todos.filter(item => item.id !== id))
  }

  const handleCheckbox = (id) => {
    settodos(todos.map(item =>
      item.id === id
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    ))
  }

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="container h-90 min-h-[85vh] overflow-auto mx-auto rounded-2xl bg-violet-100">
        {/* Add Todo */}
        <div className="addTodo mx-5 p-3">
          <h1 className="text-3xl font-bold hover:cursor-pointer">Add Your ToDo's</h1>
          <input
            type="text"
            placeholder="What you want to save!!!"
            value={todo}
            onChange={handleChange}
            className="p-2 rounded-2xl w-1/2 bg-violet-50 font-medium"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 p-2 px-3 text-white text-md rounded-2xl mx-5 my-2 hover:bg-violet-950 hover:cursor-pointer hover:font-bold transition-all"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <h2 className="text-3xl font-bold mx-5 p-3 hover:cursor-pointer">Your ToDo's</h2>
        <div className="todos">
          {todos.map(item => (
            <div
              key={item.id}
              className="todo w-1/2 flex mx-5 gap-4 justify-between p-3 text-md bg-violet-50 rounded-2xl items-center"
            >
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCheckbox(item.id)}
              />
              <div className={item.isCompleted ? "line-through flex-grow" : "flex-grow"}>
                {item.todo}
              </div>
              <div className="btns flex gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-violet-800 p-2 px-3 text-white text-md rounded-2xl hover:bg-violet-950 hover:cursor-pointer hover:font-bold transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-violet-800 p-2 px-3 text-white text-md rounded-2xl hover:bg-violet-950 hover:cursor-pointer hover:font-bold transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
