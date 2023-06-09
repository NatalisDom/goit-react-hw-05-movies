import { List } from './Reviews.stayled';
import { getReviews } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(res => {
      setReviews(res.results);
    });
  }, [id]);

  return (
    <>
      {reviews &&
        (reviews.length > 0 ? (
          <List>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <b>Author: {author}</b>
                  <p>{content}</p>
                </li>
              );
            })}
          </List>
        ) : (
          <p>Sorry, there are no reviews yet 😢</p>
        ))}
    </>
  );
};
export default Reviews;
