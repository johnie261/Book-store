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
        <div className="btn-container">
          <button type="button" className="btnn btn-remove">Comment</button>
          <span className="horizon-border" />
          <button
            type="button"
            className="btnn btn-remove"
            onClick={() => handleRemove()}
          >
            Remove
          </button>
          <span className="horizon-border" />
          <button type="button" className="btnn btn-remove">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <div className="progress">
          <svg className="wheel">
            <circle className="bg" cx="40" cy="40" r="35" />
            <circle className="meter" cx="40" cy="40" r="35" />
          </svg>
        </div>
        <div className="progress-percent">
          <p className="percent"> 77% </p>
          <p className="complete">completed</p>
        </div>
      </div>
      <div className="update">
        <div className="horizontal-line" />
        <div className="update-progress">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 3: &quot;A lesson learned &quot;</p>
          <button type="button" className="btn-chapter">UPDATE PROGRESS</button>
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
