import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import MediaInfoRoute from "./Pages/MediaInfoPage";
import SearchRoute from "./Pages/SearchPage";
import MediaImages from "./Components/MediaImages/MediaImages";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/movie/:id"
            element={<MediaInfoRoute category="movie" />}
          />
          <Route path="/movie/:id/images" element={<MediaImages category='movie' />} />

          <Route path="/tv/:id" element={<MediaInfoRoute category="tv" />} />
          <Route path="/tv/:id/images" element={<MediaInfoRoute category="tv" />} />

          <Route path="/search" element={<SearchRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
