
import React from 'react';

import Post from './components/Post';

import'./app.css'
import myImg from './components/img/smile.jpg'




function App() {
  return (
    <div className="App">
      
      
      <Post ava = {myImg} userName = {"Василь"}/>
      

      
    </div>
  );
}

export default App;
