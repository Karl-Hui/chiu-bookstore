import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { deleteBook } from '../store/bookSlice';
import { useState } from 'react';

import { updateBook } from '../store/bookSlice';
import { setInitValue, cleanInputValue } from '../store/inputSlice';
import { BookProps } from '@/types/bookTpyes';

import Button from './UIElements/Button';
import styles from './Book.module.css';
import Modal from './UIElements/Modal';

const Book = (props: BookProps) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state: any) => state.bookList);
  const inputBook = useSelector((state: any) => state.inputSlice);

  const selectedBook = bookList.value.filter(
    (book: { id: string }) => book.id == props.id
  )[0];

  const [isShowUpdate, setIsShowUpdate] = useState(false);

  const cardClickHandler = () => {
    dispatch(setInitValue(selectedBook));
    setIsShowUpdate(true);
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

  const modalOnCancelHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsShowUpdate(false);
    dispatch(cleanInputValue(''));
  };

  const updateHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(updateBook(inputBook));
    dispatch(cleanInputValue(''));
    setIsShowUpdate(false);
  };

  return (
    <React.Fragment>
      <div className={styles.card} id={props.id} onClick={cardClickHandler}>
        <div className={styles.book}>
          <img
            className={styles.book_image}
            src={props.image}
            alt={props.name}
          />
          <div className={styles.title}>Name: {props.name}</div>
          <div className={styles.price}>Price: {props.price}</div>
          <div className={styles.category}>Category: {props.category}</div>
          <div className={styles.description}>
            Description: {props.description}
          </div>
        </div>
        <Button danger text="Delete" onClick={deleteHandler}></Button>
      </div>
      {
        <Modal
          input={selectedBook}
          show={isShowUpdate}
          onCancel={modalOnCancelHandler}
          onUpdate={updateHandler}
          title="Update Book"
        ></Modal>
      }
    </React.Fragment>
  );
};

export default Book;
