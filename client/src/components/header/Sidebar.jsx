import React from 'react'
import { NavLink } from 'react-router-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiHomeFill } from 'react-icons/ri';
import { RiAccountCircleFill } from 'react-icons/ri';
import { BsChatRightFill } from 'react-icons/bs';
import { GiSnake } from 'react-icons/gi';
import { GiTicTacToe } from 'react-icons/gi';

const Sidebar = ({ navRef, handleToggle }) => {
  return (
    <div className="h-[100vh] w-[300px] fixed top-0 right-0 z-50 bg-primary-400 animate-slide-in shadow-2xl" ref={navRef}>
      <button className="absolute right-4 top-4" onClick={handleToggle} >
        <AiOutlineCloseCircle fill="#6D3C02" size={28} />
      </button>
      <div className="mx-auto flex flex-col h-[400px] justify-between items-center pt-16">
        <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-2 items-center`}>
          <RiHomeFill size={24} />
          Home
        </NavLink>
        <NavLink to="/chat/all" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-2 items-center`}>
          <BsChatRightFill size={22} />
          Chat All
        </NavLink>
        <NavLink to="/game/snake-ladder" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-2 items-center`}>
          <GiSnake size={24} />
          Snakes & Ladders
        </NavLink>
        <NavLink to="/game/tic-tac-toe" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-2 items-center`}>
          <GiTicTacToe size={24} />
          Tic Tac Toe
        </NavLink>
        <NavLink to="/account" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-2 items-center`}>
          <RiAccountCircleFill size={24} />
          Account
        </NavLink>
      </div>
    </div >
  )
}

export default Sidebar