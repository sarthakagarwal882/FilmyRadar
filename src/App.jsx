import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LogIn from './Routes/Login';
import Register from './Routes/Register';
import HomePage from './Routes/HomePage';
import MediaInfoRoute from './Routes/MediaInfoRoute';
import SearchRoute from './Routes/SearchRoute';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/movie' element={<MediaInfoRoute category='movie' />} />
          <Route path='/tv' element={<MediaInfoRoute category='tv' />} />
          <Route path='/search' element={<SearchRoute />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
