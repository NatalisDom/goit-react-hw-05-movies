import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Link, Header } from './App.styled';
import { MovieDetails } from './MovieDetails/MoviDetalis';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import '../index.css';

export const App = () => {
  return (
    <div className="App">
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="cast" element={<Cast />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
