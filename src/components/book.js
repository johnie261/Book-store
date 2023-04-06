import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBookItems, removeBookItem } from '../redux/book/bookSlice';

const Book = ({ itemId, title, author }) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBookItem(itemId))
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

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
