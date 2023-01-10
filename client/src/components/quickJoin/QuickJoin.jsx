import React from 'react';
import { useNavigate } from 'react-router-dom';

import placeholder from '../../assets/avatar-placeholder.png';

const QuickJoin = ({ setAccount }) => {
  const navigate = useNavigate();

  const handleQuickJoin = async () => {
    let image;

    try {
      const response = await fetch(placeholder);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        image = reader.result;
        setAccount({ username: 'Guest', image: image });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSetUp = () => {
    navigate('/account');
  }

  return (
    <div className="fixed max-w-[500px] bg-gray-200 rounded-md bottom-4 left-[50%] -translate-x-[50%] flex justify-between items-center">
      <button type="button" className="w-40 h-10 m-4 bg-secondary-400 text-white rounded-md hover:bg-secondary-700" onClick={handleQuickJoin}>Quick Join</button>
      <span>or</span>
      <button type="button" className="w-52 h-10 m-4 border-black border-2 rounded-md hover:bg-gray-500 hover:text-white hover:border-none" onClick={handleSetUp}>Set up your account</button>
    </div>
  )
}

export default QuickJoin