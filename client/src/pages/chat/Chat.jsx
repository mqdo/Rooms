import React from 'react';

import { RoomCard } from '../../components';
import chatAll from '../../assets/chat-all.jpg';
import science from '../../assets/science.jpg';
import study from '../../assets/study.jpg';
import hobbies from '../../assets/hobbies.jpg';

const Chat = () => {
  return (
    <div className='px-4 py-8 min-h-screen'>
      <h1 className="font-serif text-5xl text-primary-700 text-center">Choose a Chat Room!</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Chat All" link="/chat/all" image={chatAll} />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Science" link="/chat/science" image={science} />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Study" link="/chat/study" image={study} />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center">
        <RoomCard name="Hobbies" link="/chat/hobbies" image={hobbies} />
      </div>
    </div>
  )
}

export default Chat