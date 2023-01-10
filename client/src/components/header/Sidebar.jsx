import React from 'react'
import { NavLink } from 'react-router-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';

const Sidebar = ({ navRef, handleToggle }) => {
  return (
    <div className="h-[100vh] w-[400px] fixed top-0 right-0 z-50 bg-primary-400 animate-slide-in shadow-2xl" ref={navRef}>
      <button className="absolute right-4 top-4" onClick={handleToggle} >
        <AiOutlineCloseCircle fill="#6D3C02" size={28} />
      </button>
      <div className="mx-auto flex flex-col h-[400px] justify-between items-center pt-16">
        <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50`}>
          Home
        </NavLink>
        <NavLink to="/chat/all" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50`}>
          Chat All
        </NavLink>
        <NavLink to="/game/snake-ladder" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50`}>
          Snakes & Ladders
        </NavLink>
        <NavLink to="/game/tic-tac-toe" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50`}>
          Tic Tac Toe
        </NavLink>
      </div>
    </div >
  )
}

export default Sidebar