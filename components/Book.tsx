import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { deleteBook } from '../store/bookSlice';
import { setInitValue, cleanInputValue } from '../store/inputSlice';
import { BookProps } from '@/types/bookTypes';

import Button from './UIElements/Button';
import styles from './Book.module.css';

const Book = (props: BookProps) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state: any) => state.bookList);

  const selectedBook = bookList?.value?.filter(
    (book: { id: string }) => book.id == props.id
  )[0];

  const cardClickHandler = () => {
    dispatch(setInitValue(selectedBook));
    props.showModalHandler({
      id: props.id,
      title: 'Update Book',
      action: 'Update',
    });
  };

  const deleteHandler = (event: {
    stopPropagation(): void;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(deleteBook(props.id));
    dispatch(cleanInputValue(''));
  };

  return (
    <>
      <div className={styles.card} id={props.id} onClick={cardClickHandler}>
        <div className={styles.book}>
          <img
            className={styles.book_image}
            src={props.image}
            alt={props.name}
          />
          <div className={styles.title}>Title: {props.name}</div>
          <div className={styles.price}>Price: {props.price}</div>
          <div className={styles.category}>Category: {props.category}</div>
          <div className={styles.description}>
            Description: {props.description}
          </div>
        </div>
        <Button danger text="Delete" onClick={deleteHandler} />
      </div>
    </>
  );
};

export default Book;
