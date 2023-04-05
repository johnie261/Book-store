import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/bookSlice';

/* eslint-disable react/prop-types */
const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <section className="book-container">
      <div className="book-details">
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div>
          <button
            type="button"
            className="btn-remove"
            onClick={() => dispatch(removeBook(id))}
          >
            Remove
          </button>
        </div>
      </div>
    </section>
  );
};
export default Book;
