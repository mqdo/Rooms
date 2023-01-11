import React from 'react';

import { RoomCard } from '../../components';
import chatAll from '../../assets/chat-all.jpg';

const Chat = () => {
  return (
    <div className='px-4 py-8 min-h-screen'>
      <h1 className="font-serif text-5xl text-primary-700 text-center">Choose a Chat Room!</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Chat All" link="/chat/all" image={chatAll} />
      </div>
    </div>
  )
}

export default Chat