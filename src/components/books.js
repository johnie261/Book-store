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
      <ul className="book-box">
        {Object.keys(bookItems).map((book) => <Book key={book} {...book} />)}
      </ul>
      <InputBook />
    </main>
  );
};

export default Books;
