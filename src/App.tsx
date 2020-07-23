import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

import Message from './components/Message';

const pic = './images/pic.jpg';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, App.</h1>
      <img src={pic} alt=""/>
      <Message text="メッセージをprops で渡す" />
    </div>
  );
};

export default hot(module)(App);
