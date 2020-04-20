import React from 'react';
import Header from './header';
import Main from './main';
import User from './user';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Header login='Agata'/>
      <div className="container-fluid"> 
        <Main/>
        <User/>
      </div>
    </div>
  );
}

export default App;
