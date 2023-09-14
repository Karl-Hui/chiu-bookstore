import { useDispatch, useSelector } from 'react-redux';

import Book from './Book';
import { BookProps } from '@/types/bookTpyes';

import styles from './AllBooks.module.css';

const AllBook = () => {
  const books: [] = useSelector((state: any) => state.bookList.value);

  return (
    <>
      <div className={styles.bookContainer}>
        {books?.map((book: BookProps) => {
          return (
            <div key={book.id}>
              <Book
                key={book.id}
                id={book.id}
                name={book.name}
                price={book.price}
                category={book.category}
                description={book.description}
                image={book.image}
              ></Book>
            </div>
          );
        })}
      </div>
      {books?.length === 0 && (
        <div>No book yes. Please press New Book button to your first book!</div>
      )}
    </>
  );
};

export default AllBook;
