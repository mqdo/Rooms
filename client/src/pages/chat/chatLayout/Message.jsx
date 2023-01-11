import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { RiAccountCircleFill } from 'react-icons/ri';

const Message = ({ message, socket, socketId }) => {
  const [type, setType] = useState('');

  useEffect(() => {
    if (socket.id === socketId) {
      setType('sent');
    } else {
      setType('received');
    }
  }, [socket, socketId]);

  return (
    <>
      {
        type === 'sent'
          ? <div className='p-2 text-gray-500'>
            <p className=' text-right'>{message.sender}</p>
            <div className='flex items-end justify-end'>
              <p className='text-sm italic'>{moment(message.time).format('lll')}</p>
              <div className='mx-2 py-2 px-8 max-w-[70%] bg-primary-200 hover:bg-primary-400 text-black rounded-xl rounded-tr-none'>{message.content}</div>
              <div className='w-[8%]'>
                <RiAccountCircleFill fill="#EB922A" size={36} />
              </div>
            </div>
          </div>
          : <div className='p-2 text-gray-500'>
            <p>{message.sender}</p>
            <div className='flex items-end justify-start'>
              <div className='w-[8%]'>
                <RiAccountCircleFill fill="#232F5D" size={36} />
              </div>
              <div className='mx-2 py-2 px-8 max-w-[70%] bg-secondary-200 hover:bg-secondary-400 text-white rounded-xl rounded-tl-none'>{message.content}</div>
              <p className='text-sm italic'>{moment(message.time).format('lll')}</p>
            </div>
          </div>
      }
    </>
  )
}

export default Message