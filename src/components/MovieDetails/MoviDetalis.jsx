import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieData } from 'components/api/api';

import {
  GoBack,
  Container,
  Image,
  Overview,
  Title,
  Genres,
  Genre,
  Text,
} from './MovieDetalis.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieData(id).then(reply => {
      setMovie(reply);
    });
  }, [id]);

  console.log(movie);
  return (
    <main>
      <GoBack to="/"> &#8592; Go back</GoBack>
      {movie && (
        <Container>
          <Image
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.title}
          ></Image>
          <div>
            <Title>{movie.title}</Title>
            <Text>User Score: {Math.round(movie.vote_average * 10)}%</Text>
            <Overview>Overview</Overview>
            <Text>{movie.overview}</Text>
            <Text>
              <Genres>Genres</Genres>
              {movie &&
                movie.genres.map(genres => {
                  return <Genre key={genres.id}>{genres.name}</Genre>;
                })}
            </Text>
          </div>
        </Container>
      )}
    </main>
  );
};
