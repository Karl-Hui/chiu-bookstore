import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cleanInputValue } from '../store/inputSlice';

import Button from '../components/UIElements/Button';
import AllBook from '../components/AllBooks';
import Modal from '../components/UIElements/Modal';

const Index = () => {
  const dispatch = useDispatch();
  const [showAddBook, setShowAddBook] = useState(false);

  const modalOnAddHandler = () => {
    setShowAddBook(false);
  };

  const modalOnCancelHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(cleanInputValue(''));
    setShowAddBook(false);
  };

  const addBookButtonHandler = () => {
    setShowAddBook(true);
  };

  return (
    <>
      <Modal
        onCancel={modalOnCancelHandler}
        onAdd={modalOnAddHandler}
        show={showAddBook}
        title="New Book"
      />
      <Button onClick={addBookButtonHandler} text={'New Book'}></Button>
      <AllBook></AllBook>
    </>
  );
};

export default Index;
