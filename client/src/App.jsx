import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Routes, Route } from 'react-router-dom';

import { ChatAll, SnakeLadder, TicTacToe, Home } from './components';
import withHeader from './hoc/withHeader';

// const socket = io('http://localhost:3000');

const App = () => {
  // useEffect(() => {
  //   socket.on('hello', (data) => console.log(data));
  //   socket.on('welcome', (data) => console.log(data));
  //   socket.on('message', (data) => console.log(data));
  // }, [socket]);

  // const handleClick = () => {
  //   socket.emit('join-chatAll', 'mqdo');
  // }

  // const handleClick2 = () => {
  //   socket.emit('send-message', {
  //     room: 'chatAll',
  //     username: 'mqdo',
  //     message: 'this is a message'
  //   });
  // }

  return (
    <div>
      <Routes>
        <Route
          exact path='/'
          element={<Home />}
        />
        <Route
          exact path='/chat/all'
          element={<ChatAll />}
        />
        <Route
          exact path='/game/snake-ladder'
          element={<SnakeLadder />}
        />
        <Route
          exact path='/game/tic-tac-toe'
          element={<TicTacToe />}
        />
      </Routes>
    </div>
  )
}

export default withHeader(App)