import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail() {
  const params = useParams();
  const id = params.id; // TODO: Use id from route
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <div>
      <Link to='/books'>Back to catalog</Link>
      <Book book={book} showDetail />;
    </div>
  );
}

export default BookDetail;
