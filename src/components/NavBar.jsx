import React from 'react'

const navBar = () => {
  return (
    <nav className='flex justify-between mx-10 my-3  text-white bg-violet-900 rounded-4xl p-4'>
        <div className="logo flex font-extrabold text-2xl">
            <span className="mx-5  text-3xl text-style italic hover:cursor-pointer">TO DO's</span>
        </div>
        <ul className='flex justify-center hover:cursor-pointer gap-5 text-xl mx-4 '>
            <li className='hover:font-bold transition-all'>Home</li>
            <li className='hover:font-bold transition-all'>Your tasks</li>
        </ul>
    </nav>
  )
}

export default navBar
