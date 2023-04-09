import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieData } from 'components/api/api';

import {
  GoBack,
  Container,
  Genres,
  Information,
  InformationLink,
} from './MovieDetalis.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieData(id).then(reply => {
      setMovie(reply);
    });
  }, [id]);

 
  return (
    <main>
      <GoBack to="/"> &#8592; Go back</GoBack>
      {movie && (
        <>
          <Container>
            <img
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title}
            ></img>
            <div>
              <h1>{movie.title}</h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {movie && (
                <Genres>
                  {movie.genres.map(genres => {
                    return <span key={genres.id}>{genres.name}</span>;
                  })}
                </Genres>
              )}
            </div>
          </Container>
          <hr />
          <Information>
            <h3>Additional information</h3>
            <ul>
              <li>
                <InformationLink to="cast">Cast</InformationLink>
              </li>
              <li>
                <InformationLink to="reviews">Reviews</InformationLink>
              </li>
            </ul>
          </Information>
          <Outlet/>
        </>
      )}
    </main>
  );
};
