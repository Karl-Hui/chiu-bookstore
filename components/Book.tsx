import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { deleteBook } from '../store/bookSlice';
import { setInitValue, cleanInputValue } from '../store/inputSlice';

import Button from './UIElements/Button';
import styles from './Book.module.css';
import { InputValueState } from '@/types/inputTypes';
import { ModalTypes } from '@/types/modalTypes';
import { RootState } from '@/store';

export interface BookProps {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  showModalHandler: (args: ModalTypes) => void;
}

const Book = (props: BookProps) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state: RootState) => state.bookList);

  const selectedBook: InputValueState = bookList?.value?.filter(
    (book) => book.id == props.id
  )[0];

  const cardClickHandler = () => {
    dispatch(setInitValue(selectedBook));
    props.showModalHandler({
      id: props.id,
      title: 'Update Book',
      action: 'Update',
    });
  };

  const deleteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(deleteBook(props.id));
    dispatch(cleanInputValue());
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
        <Button danger type="button" text="Delete" onClick={deleteHandler} />
      </div>
    </>
  );
};

export default Book;
