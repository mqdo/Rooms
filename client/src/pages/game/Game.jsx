import React from 'react';

import { RoomCard } from '../../components';
import snakeLadder from '../../assets/snake-ladder.jpg';
import ticTacToe from '../../assets/tic-tac-toe.jpg';

const Game = () => {
  return (
    <div className='px-4 py-8 min-h-screen'>
      <h1 className="font-serif text-5xl text-primary-700 text-center">Choose a Game!</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Snakes & Ladders" link="/game/snake-ladder" image={snakeLadder} />
        <RoomCard name="Tic Tac Toe" link="/game/tic-tac-toe" image={ticTacToe} />
      </div>
    </div>
  )
}

export default Game