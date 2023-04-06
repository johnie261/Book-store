import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import InputBook from './inputBook';
import { getBookItems } from '../redux/book/bookSlice';

const Books = () => {
  const { bookItems } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, []);

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <main className="main">
      {Object.keys(bookItems).length > 0 ? (
        <ul className="book-box">
          {Object.keys(bookItems).map((book) => (
            <Book key={book} {...bookItems[book]} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <InputBook />
    </main>
  );
};

export default Books;
