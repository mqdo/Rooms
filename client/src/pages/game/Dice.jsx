import React, { useState, useEffect } from 'react';

function Dice() {
  const [rolling, setRolling] = useState(false);
  const [diceValue, setDiceValue] = useState(1);

  useEffect(() => {
    if (rolling) {
      setTimeout(() => {
        setDiceValue(Math.floor(Math.random() * 6) + 1);
        setRolling(false);
      }, 1000);
    }
  }, [rolling]);

  const dots = Array(diceValue).fill(null).map((_, i) => <div key={i} className={`${diceValue < 5 && diceValue !== 1 ? 'w-[10px] h-[10px]' : 'w-2 h-2'} ${diceValue === 1 ? 'bg-error w-4 h-4' : 'bg-black'} rounded-full`} />);

  return (
    <div className="dice-container">
      <div
        className={` w-[60px] h-[60px] border-[1px] bg-gray-50 rounded-xl border-black text-center text-3xl font-bold grid place-items-center cursor-pointer ${rolling ? 'animate-rolling' : ''}`}
        onClick={() => setRolling(true)}
      >
        <div className='p-2 flex flex-wrap justify-center items-center gap-1'>{dots}</div>
      </div>
    </div>
  );
}

export default Dice;
