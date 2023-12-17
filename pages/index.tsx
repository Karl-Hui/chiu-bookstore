import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInitValue, cleanInputValue } from '../store/inputSlice';
import { addBook, setBook, updateBook } from '../store/bookSlice';
import { setIsModalShow } from '../store/modalSlice';

import Button from '../components/UIElements/Button';
import AllBook from '../components/AllBooks';
import Modal from '../components/UIElements/Modal';
import { RootState, wrapper } from '@/store';
import { ModalTypes } from '@/types/modalTypes';

const Index = () => {
  const {
    modalOnCancelHandler,
    inputBook,
    onSubmitHandler,
    showModalHandler,
    modalControl,
  } = useModalHook();

  return (
    <>
      <Modal
        onCancel={modalOnCancelHandler}
        input={inputBook?.inputValue}
        onSubmitHandler={onSubmitHandler}
        {...modalControl}
      />
      <Button
        onClick={() =>
          showModalHandler({ id: '', title: 'New Book', action: 'Add' })
        }
        text="New Book"
        type="button"
        danger={false}
      ></Button>
      <AllBook showModalHandler={showModalHandler} />
    </>
  );
};

export default Index;

import { mockBookData } from '../data/data.js';
import useModalHook from '@/hook/ModalHook';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(setBook(mockBookData));

  return {
    props: mockBookData,
  };
});
