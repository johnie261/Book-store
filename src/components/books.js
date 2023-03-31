import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './book';
import InputBook from './inputBook';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzzanne collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty First Century',
      author: 'Suzzanne collins',
    },

  ]);

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <main className="main">
      <ul className="book-box">
        {books.map((book) => <Book key={book.id} {...book} />)}
      </ul>
      <InputBook addNewBook={addNewBook} />
    </main>
  );
};

export default Books;
