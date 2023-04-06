import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createNewBook, getBookItems } from '../redux/book/bookSlice';

const InputBook = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState('');
  const [bookAuthor, SetBookAuthor] = useState('');

  const handleChange = (e) => {
    setNewBook(e.target.value);
  };

  const handleAuthorChange = (e) => {
    SetBookAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.trim() === '' || bookAuthor.trim() === '') {
      return;
    }
    dispatch(createNewBook({
      item_id: uuidv4(),
      title: newBook,
      author: bookAuthor,
      category: 'undefined',
    }))
      .then(() => {
        dispatch(getBookItems(URL));
      });
  };

  return (
    <>
      <form className="form">
        <h1 className="heading">ADD NEW BOOK</h1>
        <div className="inputs">
          <input type="text" value={newBook} onChange={handleChange} placeholder="Book title" className="input" required />
          <input type="text" value={bookAuthor} onChange={handleAuthorChange} placeholder="Author" className="input-a" required />
          <button type="button" onClick={handleSubmit} className="btn">Add book</button>
        </div>
      </form>
    </>
  );
};

export default InputBook;
