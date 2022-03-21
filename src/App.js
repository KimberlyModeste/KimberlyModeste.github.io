import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import MenuBar from './/components/MenuBar';

import Home from './pages/Home';
import Games from './pages/Games';
<<<<<<< HEAD
import Resume from './pages/Resume';
=======
>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)


function App() {
  return (
  <div className="main-content">  
<<<<<<< HEAD
   {/* <MenuBar /> */}
    <Routes> 
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/games" element = {<Games />} />
      <Route exact path="/Master_Resume.pdf" element = {<Resume />} />
=======
   <MenuBar />
    <Routes> 
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/games" element = {<Games />} />
>>>>>>> parent of 706d7d0f (Merge branch 'master' of https://github.com/KimberlyModeste/KimberlyModest.Github)
    </Routes>
  </div>
  );
}

export default App;
