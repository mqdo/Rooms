import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import { withAccount } from '../../../hoc';
import Message from './Message';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';

const msg = [
  {
    sender: { name: 'user1' },
    content: 'hello world',
    time: Date.now()
  },
  {
    sender: { name: 'user2' },
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus eos impedit nesciunt deserunt at voluptates maxime consequatur consectetur laborum laudantium molestiae libero repellat ea eaque, optio, sed ducimus perferendis magnam.',
    time: Date.now()
  },
  {
    sender: { name: 'user3' },
    content: 'hello world',
    time: Date.now()
  },
  {
    sender: { name: 'user4' },
    content: 'hello world',
    time: Date.now()
  },
  {
    sender: { name: 'user5' },
    content: 'hello world',
    time: Date.now()
  },
];

const ChatLayout = ({ account }) => {
  const [title, setTitle] = useState('');
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const pathname = location.pathname.replace('/chat/', '');

  useEffect(() => {
    setMessages((prev) => [...prev, ...msg]);
  }, [msg])

  useEffect(() => {
    switch (pathname) {
      case 'science':
        setTitle('Science');
        break;
      case 'study':
        setTitle('Study');
        break;
      case 'hobbies':
        setTitle('Hobbies');
        break;
      case 'all':
      default:
        setTitle('Chat All');
        break;
    }
  }, [pathname]);

  const scrollToBottom = () => {
    const body = document.getElementById('chat-body');
    body.scrollTop = body.offsetHeight;
  }

  return (
    <div className='p-4 mx-auto max-w-5xl z-0 relative'>
      <div className='relative'>
        <Link to='/chat' className='absolute top-[50%] -translate-y-[50%]'>
          <IoIosArrowBack size={32} fill="#6D3C02" />
        </Link>
        <h1 className="font-serif text-5xl text-primary-700 text-center">{title}</h1>
        <div id='show-online' data-tooltip-content={`${69} user(s) online`} data-tooltip-place='left' data-tooltip-variant='warning' className='absolute top-[50%] -translate-y-[50%] right-0'>
          <AiOutlineInfoCircle size={24} fill="#6D3C02" />
        </div>
        <Tooltip anchorId='show-online' />
      </div>
      <div className='relative max-w-3xl mx-auto'>
        <div id='chat-body' className='w-full h-[70vh] my-4 mx-auto overflow-y-scroll'>
          {messages.map((ms, index) => <Message key={index} message={ms} socket={{ id: 'abc' }} socketId={'abc'} />)}
        </div>
        <button className='absolute right-4 -bottom-4 text-gray-500 hover:text-primary-400' onClick={scrollToBottom}>Read Latest</button>
      </div>
      <div className='py-2 px-4 mx-auto w-full md:max-w-xl h-[7vh] bg-primary-400 flex justify-between items-center gap-1 relative rounded-md'>
        <button className='absolute left-6'>
          <BsFillEmojiLaughingFill size={18} fill="#6D3C02" />
        </button>
        <input type="text" className='w-[90%] h-8 rounded-md p-2 pl-8' />
        <button className='bg-primary-700 rounded-full h-8 w-8 grid items-center justify-center'>
          <IoIosSend fill="#FFFFFF" size={20} />
        </button>
      </div>
    </div>
  )
}

export default withAccount(ChatLayout)