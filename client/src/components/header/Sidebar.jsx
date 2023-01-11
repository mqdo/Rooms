import React from 'react'
import { NavLink } from 'react-router-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiHomeFill } from 'react-icons/ri';
import { RiAccountCircleFill } from 'react-icons/ri';
import { BsChatRightFill } from 'react-icons/bs';
import { RiGamepadFill } from 'react-icons/ri';

const Sidebar = ({ navRef, handleToggle }) => {
  return (
    <div className="h-[100vh] w-[300px] fixed top-0 right-0 z-50 bg-primary-400 animate-slide-in shadow-2xl" ref={navRef}>
      <button className="absolute right-4 top-4" onClick={handleToggle} >
        <AiOutlineCloseCircle fill="#6D3C02" size={28} />
      </button>
      <div className="mx-auto flex flex-col h-[400px] justify-between items-center pt-16">
        <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-4 items-center`}>
          <RiHomeFill size={24} />
          Home
        </NavLink>
        <NavLink to="/chat" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-4 items-center`}>
          <BsChatRightFill size={20} />
          Chat
        </NavLink>
        <NavLink to="/game" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-4 items-center`}>
          <RiGamepadFill size={26} />
          Game
        </NavLink>
        <NavLink to="/account" className={({ isActive }) => `${isActive ? 'text-primary-700' : 'text-gray-600'} font-serif text-xl hover:opacity-50 flex gap-4 items-center`}>
          <RiAccountCircleFill size={26} />
          Account
        </NavLink>
      </div>
    </div >
  )
}

export default Sidebar