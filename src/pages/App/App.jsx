import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { movies } from "../../data.js";
import '../App/App.css';
import LoginPage from '../LoginPage/LoginPage.jsx';
import MoviesListPage from '../MoviesListPage/MoviesListPage.jsx';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage.jsx';
import ActorsListPage from '../ActorsListPage/ActorsListPage.jsx';
import MovieCard from '../../components/MovieCard/MovieCard.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ?
        <>
          <NavBar />
          <Routes>
            {/* Routes components in here */}
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorsListPage movies={movies} />} />
          </Routes>
        </>
        :
        <LoginPage />
      }
    </main>
  );
}
