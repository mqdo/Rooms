import React from 'react';

import RoomCard from './RoomCard';
import chatAll from '../../assets/chat-all.jpg';
import snakeLadder from '../../assets/snake-ladder.jpg';
import ticTacToe from '../../assets/tic-tac-toe.jpg';

const Home = () => {
  return (
    <div className='px-4 py-8'>
      <h1 className="font-serif text-5xl text-primary-700 text-center">Let's Join A Room!</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Chat All" link="/chat/all" image={chatAll} />
        <RoomCard name="Snakes & Ladders" link="/game/snake-ladder" image={snakeLadder} />
        <RoomCard name="Tic Tac Toe" link="/game/tic-tac-toe" image={ticTacToe} />
      </div>
    </div>
  )
}

export default Home