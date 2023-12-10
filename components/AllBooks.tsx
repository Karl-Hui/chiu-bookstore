import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import styles from './AllBooks.module.css';
import { RootState } from '@/store';
import { ModalTypes } from '@/types/modalTypes';

interface AllBooksProps {
  showModalHandler: (args: ModalTypes) => void;
}

const AllBooks = ({ showModalHandler }: AllBooksProps) => {
  const books = useSelector((state: RootState) => state.bookList.value);

  return (
    <>
      <div className={styles.bookContainer}>
        {books.map((book) => (
          <Book key={book.id} {...book} showModalHandler={showModalHandler} />
        ))}
      </div>
      {books.length === 0 && (
        <div className={styles.message}>
          No books available yet. Please press the "New Book" button to add your
          first book to the collection!
        </div>
      )}
    </>
  );
};

export default AllBooks;
