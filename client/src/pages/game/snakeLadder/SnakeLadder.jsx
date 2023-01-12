import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Tooltip } from 'react-tooltip';
import { withAccount } from '../../../hoc';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import slBoard from '../../../assets/sl-board.png';
import placeholder from '../../../assets/avatar-placeholder.png';
import Dice from '../Dice';

const SnakeLadder = () => {
  const [items, setItems] = useState(Array(100).fill(0));

  return (
    <div className='max-w-5xl mx-auto p-4 flex flex-col justify-between gap-4'>
      <div className='relative'>
        <Link to='/game' className='absolute top-[50%] -translate-y-[50%]'>
          <IoIosArrowBack size={32} fill="#6D3C02" />
        </Link>
        <h1 className="font-serif text-5xl text-primary-700 text-center">
          Snakes & Ladders
        </h1>
        <div id='show-online' data-tooltip-content='If your counter lands at the bottom of a ladder, you can move up to the top of the ladder. If your counter lands on the head of a snake, you must slide down to the bottom of the snake. The first player to get to the space that says Finish is the winner.' data-tooltip-place='bottom' data-tooltip-variant='warning' className='absolute top-[50%] -translate-y-[50%] right-0'>
          <AiOutlineInfoCircle size={24} fill="#6D3C02" />
        </div>
        <Tooltip anchorId='show-online' style={{ maxWidth: '300px' }} />
      </div>
      <div className='max-w-2xl mx-auto relative'>
        <div className='absolute top-0 bottom-0 right-0 left-0 grid grid-cols-10 gap-1 place-items-center z-10'>
          {items.map((item, index) => <div key={index} className=''>{item}</div>)}
        </div>
        <img src={slBoard} alt='snakes & ladders board' className='opacity-70' />
      </div>
      <div className='w-full md:max-w-xl h-[7vh] mx-auto bg-primary-400 rounded-md flex justify-between relative'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex gap-8 m-8'>
            <div>
              <img src={placeholder} className=' w-10 h-auto rounded-full' />
            </div>
            <div>
              <img src={placeholder} className=' w-10 h-auto rounded-full' />
            </div>
          </div>
          <div className='flex gap-8 m-8'>
            <div>
              <img src={placeholder} className=' w-10 h-auto rounded-full' />
            </div>
            <div>
              <img src={placeholder} className=' w-10 h-auto rounded-full' />
            </div>
          </div>
        </div>
        <div className='absolute left-[50%] -translate-x-[50%] bottom-0'>
          <Dice />
        </div>
      </div>
    </div>
  )
}

export default withAccount(SnakeLadder);