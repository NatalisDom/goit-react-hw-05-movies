import { useState, useEffect } from 'react';
import { getTrending } from 'components/api/api';

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
      <ul>
        {trending.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </main>
  );
};
