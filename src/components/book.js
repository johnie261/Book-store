const Book = ({id, title, author}) => {
    return <section className="book-container">
        <div className="book-details">
            <h1 className="title">{title}</h1>
            <p className="author">{author}</p>
        </div>
    </section>
}

export default Book;