import { useDispatch } from 'react-redux';
import { getBookItems, removeBookItem } from '../redux/book/bookSlice';

/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
const Book = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBookItem(item_id))
      .then(() => {
        dispatch(getBookItems(URL));
      });
  };

  return (
    <section className="book-container">
      <div className="book-details">
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div>
          <button
            type="button"
            className="btn-remove"
            onClick={() => handleRemove()}
          >
            Remove
          </button>
        </div>
      </div>
    </section>
  );
};
export default Book;
