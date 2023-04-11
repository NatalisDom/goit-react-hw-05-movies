import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Link, Header } from './App.styled';

import '../index.css';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MoviDetalis'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div className="App">
      <Header>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
