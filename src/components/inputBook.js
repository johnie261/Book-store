import { useState } from "react";

const InputBook = ({addNewBook}) => {
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
        addNewBook(newBook, bookAuthor)
    }
    return <>
    <form className="form">
        <h1 className="heading">ADD NEW BOOK</h1>
        <div className="inputs">
            <input type="text" value={newBook} onChange={handleChange} placeholder="Book title" className="input" />
            <input type="text" value={bookAuthor} onChange={handleAuthorChange} placeholder="Author" className="input-a" />
            <button type="button" onClick={handleSubmit} className="btn">Add book</button>
        </div>
    </form>
    </>
}

export default InputBook;