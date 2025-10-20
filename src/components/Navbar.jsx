  const Navbar = () => {
  return (
    <nav className="bg-black p-3 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold text-white flex items-center bg-black py-1.5 px-2">
        <span className='pr-2 py-1 rounded-xl flex items-center justify-center'>Task</span>
        <span className='bg-amber-600 px-1.5 py-0.5 rounded-lg flex items-center justify-center text-black'>Hub</span>
      </h1>
      <ul className="flex font-medium">
        <li className="mx-3 cursor-pointer hover:font-bold transition-all duration-200"><a href="/">Home</a></li>
        <li className="mx-3 cursor-pointer hover:font-bold transition-all duration-200"><a href="https://github.com/ikeshavvarshney">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar