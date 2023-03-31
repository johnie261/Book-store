import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Category from './components/Category';
import BookNav from './components/BookNav';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookNav />}>
          <Route index element={<Books />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
