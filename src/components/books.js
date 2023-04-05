import { useSelector } from 'react-redux';
import Book from './book';
import InputBook from './inputBook';

const Books = () => {
  const { bookItems } = useSelector((store) => store.book);

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <main className="main">
      <ul className="book-box">
        {bookItems.map((book) => <Book key={book.id} {...book} />)}
      </ul>
      <InputBook />
    </main>
  );
};

export default Books;
