import { useState, useEffect } from 'react';
import { getTrending } from 'components/api/api';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function getTrendingMovie() {
      const { results } = await getTrending();
      setTrending(results);
    }
    getTrendingMovie();
  }, []);
  return (
    <main>
      <h1 className="movie_title">Trending today</h1>
      <ul className="movie_list">
        {trending.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link className="movie_list__link" to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
