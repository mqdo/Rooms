import React, { useEffect, useState } from 'react'

import { withAccount } from '../../hoc';
import placeholder from '../../assets/avatar-placeholder.png';

const Account = ({ account, setAccount, removeAccount }) => {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    handleReset();
  }, [account])

  const handleSetAccount = () => {
    if (username === '' && image === '') return;
    if (username !== '') {
      setAccount({ username: username })
    }
    if (image !== '') {
      setAccount({ image: image })
    }
    handleReset();
  }

  const handleChangeImage = () => {
    const imgPath = document.querySelector('input[type=file]').files[0];
    const img = document.getElementById("profile");
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      setImage(reader.result);
      img.src = reader.result;
    }, false);

    if (imgPath) {
      reader.readAsDataURL(imgPath);
    }
  }

  const handleReset = () => {
    setUsername(account?.username || '');
    setImage(account?.image || '');
  }

  return (
    <div className='px-4 py-8 flex flex-col items-center gap-4'>
      <h1 className="mb-4 font-serif text-5xl text-primary-700 text-center">Hello {account?.username}</h1>
      <h3 className="mb-4 font-serif text-3xl text-primary-400 text-center">Let's set up your account!</h3>
      <label className="flex flex-col items-center justify-center gap-4 cursor-pointer">
        <img src={image || placeholder} id="profile" alt="profile image" className="w-40 h-40 rounded-full" />
        <span className="py-2 px-4 mb-4 bg-primary-200 text-black rounded-md cursor-pointer text-center hover:bg-primary-400">Change</span>
        <input type="file" accept="image/*" onChange={handleChangeImage} className="hidden" />
      </label>
      <label htmlFor="username" className="text-lg text-black block">Your Username: </label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="h-10 w-[360px] block p-2 bg-gray-100 rounded-md border-none outline-none hover:bg-gray-300 focus:outline-primary-400 focus:bg-primary-200" />
      <div>
        <button type="button" className="w-20 h-10 m-4 bg-secondary-400 text-white rounded-md hover:bg-secondary-700" onClick={handleSetAccount}>Set up</button>
        <button type="button" className="w-20 h-10 m-4 bg-gray-200 text-black rounded-md hover:bg-gray-500 hover:text-white" onClick={handleReset}>Cancel</button>
      </div>
      <button type="button" className="w-48 h-10 my-2 text-error border-2 border-error rounded-md hover:bg-error hover:text-white" onClick={removeAccount}>Remove Account</button>
    </div>
  )
}

export default withAccount(Account)