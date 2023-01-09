import React from 'react'

import { Link } from 'react-router-dom'

const RoomCard = ({ name, link, image }) => {
  return (
    <Link to={link}>
      <div className="mt-8 md:inline-block h-[200px] w-[500px] md:w-[350px] bg-gray-400 rounded-md relative hover:shadow-xl hover:-translate-y-1 hover:-translate-x-1">
        <h3 className="absolute bottom-2 left-4 font-serif text-2xl text-accent-400 drop-shadow-2xl hover:opacity-50">{name}</h3>
        <img src={image} alt="thumbnail" className="w-full h-full object-cover rounded-md" />
      </div>
    </Link>
  )
}

export default RoomCard