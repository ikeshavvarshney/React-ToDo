import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [Task, setTask] = useState('')
  const [Tasks, setTasks] = useState([])

  useEffect(() => {
    let tasksString = localStorage.getItem('Tasks')
    if (tasksString) {
      setTasks(JSON.parse(tasksString))
    }
  }, [])
  useEffect(() => {
    saveToLS()
  }, [Tasks])

  const saveToLS = () => {
    localStorage.setItem('Tasks', JSON.stringify(Tasks))
  }
  const handleAdd = () => {
    const newTask = { Task, id: uuidv4(), isCompleted: false }
    const updatedTasks = [...Tasks, newTask]   // ✅ make a fresh array

    setTasks(updatedTasks)                     // ✅ update state
    setTask('')                                // clear input
    saveToLS(updatedTasks)                     // ✅ save with the new array
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd()
    }
  }
  const handleEdit = (id) => {
    const taskToEdit = Tasks.find(task => task.id === id)
    setTask(taskToEdit.Task)
    setTasks(Tasks.filter(task => task.id !== id))
    saveToLS()
  }
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = Tasks.filter(task => task.id !== id)
      setTasks(updatedTasks)
    }
    saveToLS()
  }
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const toggleCheck = (id) => {
    const updatedTasks = Tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setTasks(updatedTasks)
    saveToLS()
  }

  return (
    <>
      <main className="bg-black min-h-screen text-white">
        <Navbar />
        <div className="seperation w-full bg-gray-700 h-0.5"></div>
        <div className="container m-6 p-4 w-[60vw] mx-auto border-2 border-gray-600 rounded-xl">
          <h1 className="text-2xl font-bold">Task Managing App</h1>
          <div className="addTask my-5">
            <h2 className="text-lg font-medium">Add Task</h2>
            <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" value={Task} className='bg-gray-700 rounded-lg py-1 px-2 m-2 from-neutral-950 w-5/6' />
            <button onClick={Task ? handleAdd : null} className='bg-gray-700 py-1 px-3 rounded-xl m-2 hover:bg-gray-800'>Add</button>
          </div>
          <div className="yourTasks my-5">
            <h2 className="text-lg font-medium">Your Tasks</h2>
            <div className="taskContainer flex flex-col items-center">
              {Tasks.length === 0 && <p className='text-gray-400'>No Tasks Available</p>}
              {Tasks.map((item) => {
                return (
                  <div className="task flex items-center justify-between w-full" key={item.id}>
                    <input type="checkbox" className='h-5 w-5 accent-amber-600' onClick={() => toggleCheck(item.id)} />
                    <p className={item.isCompleted ? 'line-through' : ''}>{item.Task}</p>
                    <div className="buttons">
                      <button onClick={() => handleEdit(item.id)} className='bg-gray-700 py-1 px-3 rounded-xl m-2 hover:bg-gray-800'>Edit</button>
                      <button onClick={() => handleDelete(item.id)} className='bg-gray-700 py-1 px-3 rounded-xl m-2 hover:bg-gray-800'>Delete</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
