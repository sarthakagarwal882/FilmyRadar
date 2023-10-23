import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./Routes/LoginRoute";
import Register from "./Routes/RegisterRoute";
import HomePage from "./Routes/HomePageRoute";
import MediaInfoRoute from "./Routes/MediaInfoRoute";
import SearchRoute from "./Routes/SearchRoute";
import MediaImages from "./Components/MediaImages";

function App() {
  return (
    <div>
      <BrowserRouter>
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
