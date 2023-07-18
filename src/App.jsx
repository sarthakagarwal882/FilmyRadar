import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import LogIn from './Components/Routes/Login';
import Register from './Components/Routes/Register';
import HomePage from './Components/Routes/HomePage';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/'/> */}
        {/* <Route path='/'/> */}
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
