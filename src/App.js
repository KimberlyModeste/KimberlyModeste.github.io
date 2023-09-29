import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Play from './pages/Play';
import CSC470 from './pages/CSC470'

function App() {
  return (
  <div className="main-content">  
    <Routes> 
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/play" element = {<Play />} />
      <Route exact path="/Master_Resume.pdf" element = {<Resume />} />
      <Route exact path='/CSC470' element={<CSC470 />} />
    </Routes>
  </div>
  );
}

export default App;
