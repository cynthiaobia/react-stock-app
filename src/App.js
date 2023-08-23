import './App.css';
import Main from './pages/Main';
import Stocks from './pages/Stocks';
import Price from './pages/Price';
import About from './pages/About';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';

import { useState, useEffect } from 'react'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/price/:symbol' element={<Price />} />
        <Route path='/stocks' element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
