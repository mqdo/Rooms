import React from 'react';

import { RoomCard } from '../../components';
import chat from '../../assets/chat.jpg';
import game from '../../assets/game.jpg';
import story from '../../assets/story.jpg';

const Home = () => {
  return (
    <div className='px-4 py-8 min-h-screen'>
      <h1 className="font-serif text-5xl text-primary-700 text-center">Choose your Genre!</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Chat" link="/chat" image={chat} />
        <RoomCard name="Game" link="/game" image={game} />
        <RoomCard name="Story" link="/story" image={story} />
      </div>
    </div>
  )
}

export default Home