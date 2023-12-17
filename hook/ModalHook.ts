import { v4 as uuidv4 } from 'uuid';
import { cleanInputValue, setInitValue } from '@/store/inputSlice';
import { setIsModalShow } from '@/store/modalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from '@/store/bookSlice';
import { RootState } from '@/store';
import { ModalTypes } from '@/types/modalTypes';

export default function useModalHook() {
  const dispatch = useDispatch();

  const bookList = useSelector((state: RootState) => state.bookList);
  const inputBook = useSelector((state: RootState) => state.inputSlice);

  const [modalControl, setModalControl] = useState({
    show: false,
    title: '',
    action: '',
  });

  const modalOnCancelHandler = () => {
    dispatch(cleanInputValue());
    dispatch(setIsModalShow({ isShow: false }));
    setModalControl({ ...modalControl, show: false });
  };

  const showModalHandler = ({ id, title, action }: ModalTypes) => {
    dispatch(setIsModalShow({ isShow: true }));
    setModalControl({ title, action, show: true });

    if (!id || !bookList?.value) return;

    const selectedBook = bookList.value?.find((book: any) => book.id === id);

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

  return {
    modalOnCancelHandler,
    inputBook,
    onSubmitHandler,
    showModalHandler,
    modalControl,
  };
}
