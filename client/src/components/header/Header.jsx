import React from 'react';
import { NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import logoFullDark from '../../assets/Logo-full-dark.svg';

const Header = ({ handleToggle }) => {
  return (
    <div className="w-full bg-primary-400 relative">
      <div className="md:hidden mx-auto h-16 flex justify-between items-center p-4">
        <NavLink to="/">
          <img src={logoFullDark} alt="logo" />
        </NavLink>
        <button onClick={handleToggle}>
          <GiHamburgerMenu fill="#6D3C02" size={28} />
        </button>
      </div>
      <div className="hidden mx-auto max-w-5xl md:flex h-16 justify-between items-center p-4">
        <NavLink to="/">
          <img src={logoFullDark} alt="logo" />
        </NavLink>
        <div className="min-w-[70%] flex justify-between">
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
      </div>
    </div>
  )
}

export default Header