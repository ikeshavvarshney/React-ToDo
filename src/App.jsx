import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [Task, setTask] = useState('')
  const [Tasks, setTasks] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const saveToLS = (updatedTasks) => {
    localStorage.setItem('Tasks', JSON.stringify(updatedTasks))
  }
  useEffect(() => {
    let tasksString = localStorage.getItem('Tasks')
    if (tasksString) {
      setTasks(JSON.parse(tasksString))
    }
  }, [])

  const handleAdd = () => {
    const isDuplicate = Tasks.some(
      (t) => t.Task.trim() === Task.trim()
    );
    if (isDuplicate) {
      alert("This task already exists!");
      return;
    }
    const newTask = { Task, id: uuidv4(), isCompleted: false }
    const updatedTasks = [...Tasks, newTask]

    setTasks(updatedTasks)
    setTask('')
    saveToLS(updatedTasks)
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && Task) {
      handleAdd()
    }
  }
  const handleEdit = (id) => {
    const taskToEdit = Tasks.find(task => task.id === id)
    setTask(taskToEdit.Task)
    setTasks(Tasks.filter(task => task.id !== id))
    saveToLS(Tasks)
  }
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = Tasks.filter(task => task.id !== id)
      setTasks(updatedTasks)
      saveToLS(updatedTasks)
    }
  }
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const toggleCheck = (id) => {
    const updatedTasks = Tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setTasks(updatedTasks)
    saveToLS(updatedTasks)
  }

  return (
    <>
      <main className="min-h-screen text-white">
        <Navbar />
        <div className="seperation w-full bg-gray-700 h-0.5"></div>
        <div className="container md:m-4 p-4 md:w-[65vw] bg-gray-800 md:mx-auto md:border-2 border-gray-600 md:rounded-xl">
          <h1 className="text-2xl font-bold flex justify-center">TaskHub - Manage your tasks at one place.</h1>
          <div className="addTask my-5">
            <h2 className="text-lg font-semibold">Add Task</h2>
            <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" value={Task} className='bg-gray-700 rounded-lg py-1 px-2 m-2 from-neutral-950 w-5/6' />
            <button onClick={Task ? handleAdd : null} className='bg-amber-600 py-1 px-3 rounded-xl m-2 hover:bg-amber-800'>Add</button>
          </div>
          <div className="yourTasks my-5 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your Tasks</h2>
              <div className="flex items-center gap-3">
                <input type="checkbox" className='h-5 w-5 accent-amber-600' id="showCompleted" checked={showCompleted} onClick={() => setShowCompleted(!showCompleted)} />
                <label className='flex items-center gap-2 cursor-pointer font-medium hover:underline' htmlFor="showCompleted">Show Completed Tasks</label>
              </div>
            </div>
            <div className="taskContainer flex flex-col items-center gap-2">
              {Tasks.length === 0 && <p className='text-gray-400'>No Tasks Available</p>}
              {Tasks.map((item) => {
                return (showCompleted || !item.isCompleted) && (
                  <div className="task flex items-center justify-between w-full gap-4" key={item.id}>
                    <input type="checkbox" className='h-5 w-5 accent-amber-600' checked={item.isCompleted} onClick={() => toggleCheck(item.id)} />
                    <p className={`${item.isCompleted ? 'line-through' : ''} max-w-[80%] break-normal`}>{item.Task}</p>
                    <div className="buttons flex items-center gap-2">
                      <button onClick={() => handleEdit(item.id)} className='bg-amber-600 py-1 px-3 rounded-xl hover:bg-amber-800'><img src="edit.svg" alt="Edit" width={20} /></button>
                      <button onClick={() => handleDelete(item.id)} className='bg-amber-600 py-1 px-3 rounded-xl hover:bg-amber-800'><img src="delete.svg" alt="Delete" width={20} /></button>
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