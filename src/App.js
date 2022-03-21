import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import MenuBar from './/components/MenuBar';

import Home from './pages/Home';
import Games from './pages/Games';
import Resume from './pages/Resume';


function App() {
  return (
  <div className="main-content">  
   {/* <MenuBar /> */}
    <Routes> 
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/games" element = {<Games />} />
      <Route exact path="/Master_Resume.pdf" element = {<Resume />} />
    </Routes>
  </div>
  );
}

export default App;
