import { List } from './Reviews.stayled';
import { getReviews } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReviews(id).then(res => {
      setReviews(res.results);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </List>
      ) : (
        <p>Sorry, there are no reviews yet 😢</p>
      )}
    </>
  );
};
export default Reviews;