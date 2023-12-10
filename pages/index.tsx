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
  const dispatch = useDispatch();

  const [modalControl, setModalControl] = useState({
    show: false,
    title: '',
    action: '',
  });

  const bookList = useSelector((state: RootState) => state.bookList);
  const inputBook = useSelector((state: RootState) => state.inputSlice);

  const modalOnCancelHandler = () => {
    dispatch(cleanInputValue());
    dispatch(setIsModalShow(false));
    setModalControl({ ...modalControl, show: false });
  };

  const showModalHandler = ({ id, title, action }: ModalTypes) => {
    dispatch(setIsModalShow(true));
    setModalControl({ title, action, show: true });

    if (!id || !bookList?.value) return;

    const selectedBook = bookList.value?.find((book) => book.id === id);

    if (!selectedBook) return;

    dispatch(setInitValue(selectedBook));
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (modalControl.action === 'Add') {
      const newBookCopy = {
        ...inputBook.inputValue,
        id: uuidv4(),
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg',
      };
      dispatch(addBook(newBookCopy));
      modalOnCancelHandler();
    }
    if (modalControl.action === 'Update') {
      dispatch(updateBook(inputBook));
      modalOnCancelHandler();
    }
  };

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

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(setBook(mockBookData));

  return {
    props: mockBookData,
  };
});
