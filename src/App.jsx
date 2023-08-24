import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import LogIn from './Routes/Login';
import Register from './Routes/Register';
import HomePage from './Routes/HomePage';
import MediaInfoRoute from './Routes/MediaInfoRoute';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<HomePage />}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/MediaInfo' element={<MediaInfoRoute/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
