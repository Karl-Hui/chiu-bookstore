import { useSelector } from 'react-redux';

import Book from './Book';
import { AllBooksProps } from '../types/allBooksTypes';
import { BookProps } from '../types/bookTypes';

import styles from './AllBooks.module.css';

const AllBook = (props: AllBooksProps) => {
  const books: [] = useSelector((state: any) => state.bookList.value);

  return (
    <>
      <div className={styles.bookContainer}>
        {books?.map((book: BookProps) => {
          return <Book key={book.id} {...props} {...book}></Book>;
        })}
      </div>
      {books?.length === 0 && (
        <div className={styles.message}>
          No books available yet. Please press the "New Book" button to add your
          first book to the collection!
        </div>
      )}
    </>
  );
};

export default AllBook;
