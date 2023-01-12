import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { RiAccountCircleFill } from 'react-icons/ri';
import placeholder from '../../../assets/avatar-placeholder.png';

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
          ? <div className='px-2 py-4 text-gray-500'>
            <p className=' text-right'>{message.sender.name}</p>
            <div className='mt-2 flex items-start justify-end'>
              <div className='flex items-end justify-end'>
                <p className='text-sm italic'>{moment(message.time).format('lll')}</p>
                <div className='mx-2 py-2 px-8 max-w-[70%] bg-primary-200 hover:bg-primary-400 text-black rounded-xl rounded-tr-none'>{message.content}</div>
              </div>
              <img src={message.sender.image || placeholder} alt='' className='w-10 h-10 mr-2 rounded-full' />
            </div>
          </div>
          : <div className='px-2 py-4 text-gray-500'>
            <p>{message.sender.name}</p>
            <div className='mt-2 flex items-start justify-start'>
              <img src={message.sender.image || placeholder} alt='' className='w-10 h-10 mr-2 rounded-full' />
              <div className='flex items-end justify-start'>
                <div className='mx-2 py-2 px-8 max-w-[70%] bg-secondary-200 hover:bg-secondary-400 text-white rounded-xl rounded-tl-none'>{message.content}</div>
                <p className='text-sm italic'>{moment(message.time).format('lll')}</p>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Message