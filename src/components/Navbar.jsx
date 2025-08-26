import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-amber-600 p-3 text-black flex justify-between items-center">
      <h1 className="text-xl font-bold">iTask - Todo App</h1>
      <ul className="flex font-medium">
        <li className="mx-3 cursor-pointer hover:font-bold transition-all duration-200">Home</li>
        <li className="mx-3 cursor-pointer hover:font-bold transition-all duration-200">Your Tasks</li>
        <li className="mx-3 cursor-pointer hover:font-bold transition-all duration-200">About</li>
        <li className="mx-3 cursor-pointer hover:font-bold transition-all duration-200">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar