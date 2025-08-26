import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [Task, setTask] = useState('')
  const [Tasks, setTasks] = useState([])
  const handleAdd = () => {
    setTasks([...Tasks, {Task, isCompleted: false}])
  }
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <>
      <main className="bg-black min-h-screen text-white">
        <Navbar />
        <div className="container m-4 p-4 w-[60vw] mx-auto border-2 border-gray-600 rounded-xl">
          <h1 className="text-2xl font-bold">Task Managing App</h1>
          <div className="addTask my-5">
            <h2 className="text-lg font-medium">Add Task</h2>
            <input onChange={handleChange} type="text" value={Task} className='bg-gray-700 rounded-lg py-1 px-2 m-2 from-neutral-950' />
            <button onClick={handleAdd} className='bg-gray-700 py-1 px-3 rounded-xl m-2 hover:bg-gray-800'>Add</button>
          </div>
          <div className="yourTasks mt-5">
            <h2 className="text-lg font-medium">Your Tasks</h2>
            <div className="taskContainer">
              <div className="task flex items-center justify-between">
                <p>{Task}</p>
                <div className="buttons">
                  <button onClick={handleEdit} className='bg-gray-700 py-1 px-3 rounded-xl m-2 hover:bg-gray-800'>Edit</button>
                  <button onClick={handleDelete} className='bg-gray-700 py-1 px-3 rounded-xl m-2 hover:bg-gray-800'>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
