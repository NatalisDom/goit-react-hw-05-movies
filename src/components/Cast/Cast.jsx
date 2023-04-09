import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastList } from 'components/api/api';
import { List } from './Cast.stayled';

export const Cast = () => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCastList(id).then(reply => {
      setCast(reply.cast.slice(0, 10));
      console.log(reply.cast);
    });
  }, [id]);
  console.log(cast);

  return (
    <>
      {cast && (
        <List>
          {cast.map(({ actor_id, name, character, profile_path }) => {
            return (
              <li key={actor_id}>
                {console.log(profile_path)}
                <img
                  src={
                    profile_path
                      ? `${imageUrl}${profile_path}`
                      : `https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png`
                  }
                  alt="actor"
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};
