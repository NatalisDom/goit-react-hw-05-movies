import { fetchByQuery } from 'components/api/api';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { List, Films } from './Movies.styled';

const Movies = () => {
  const [info, setInfo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const getSearch = searchParams.get('getSearch');
  const [request, setRequest] = useState(() => getSearch || '');

  useEffect(() => {
    const fetchInfo = async () => {
      const { results } = await fetchByQuery(getSearch);
      setInfo(results);
      setRequest('');
    };
    if (getSearch) {
      fetchInfo();
    }
  }, [getSearch]);

  const location = useLocation();
  // console.log(location);

  const handleAlter = e => {
    setRequest(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // console.log(getSearch);
    setSearchParams({ getSearch: request });
    setRequest('');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" value={request} onChange={handleAlter} />
        <button type="submit">Search</button>
      </form>
      <div>
        {info &&
          (info.length > 0 ? (
            <List>
              {info.map(({ title, id }) => {
                return (
                  <li key={id}>
                    <Films state={{ from: location }} to={`/movies/${id}`}>
                      {title}
                    </Films>
                  </li>
                );
              })}
            </List>
          ) : (
            <p>No movies with this title 😢</p>
          ))}
      </div>
    </main>
  );
};
export default Movies;
