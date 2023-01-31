import React, {  useState } from 'react';
import Header from './components/Header';
import { ThemeSwitcher } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom'
import TopRated from './pages/TopRated';
import MainPage from './pages/MainPage';
import Upcoming from './pages/Upcoming';
import { movieIdContext } from './context/MovieIdContext';
import MoviePage from './components/MoviePage';

function App() {

  const [theme, setTheme] = useState("light-mode");
  const data = {
    theme,
    setTheme
  }
  const [movieID, setMovieID] = useState(null);

  return (
    <div className={`App ${theme}`}>
      <ThemeSwitcher.Provider value={data}>
        <Header />
      </ThemeSwitcher.Provider>
      <movieIdContext.Provider value={{ movieID, setMovieID }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movieID" element={<MoviePage />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/upcoming' element={<Upcoming />} />
        </Routes>
      </movieIdContext.Provider>
    </div>
  );
}

export default App;
