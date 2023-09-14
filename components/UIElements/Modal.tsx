import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../../store/bookSlice';
import { cleanInputValue } from '../../store/inputSlice';

import { ModalProps } from '../../types/modalTypes';

import Button from './Button';
import Input from './Input';
import styles from './Modal.module.css';

const ModalOverlay = (props: ModalProps) => {
  const dispatch = useDispatch();
  const newBook = useSelector((state: any) => state.inputSlice);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newBookCopy = {
      ...newBook.inputValue,
      id: uuidv4(),
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg',
    };
    dispatch(addBook(newBookCopy));
    dispatch(cleanInputValue(''));
  };

  return (
    <>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles.modal_header}>
              <h2>{props.title}</h2>
            </div>
            <div className={styles.modal_body}>
              <Input
                id="name"
                label="Name: "
                type="text"
                originValue={props.input?.name || ''}
              ></Input>
              <Input
                id="price"
                label="Price: "
                type="number"
                originValue={props.input?.price || ''}
              ></Input>
              <Input
                id="category"
                label="Category: "
                type="text"
                originValue={props.input?.category || ''}
              ></Input>
              <Input
                id="description"
                label="Description: "
                type="text"
                originValue={props.input?.description || ''}
              ></Input>
            </div>
            <div className={styles.modal_footer}>
              {!!props.onAdd && <Button onClick={props.onAdd} text="Add" />}
              {!!props.onUpdate && (
                <Button onClick={props.onUpdate} text="Update" />
              )}
              {!!props.onCancel && (
                <Button onClick={props.onCancel} text="Cancel" />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={0}
        classNames="modal"
      >
        <ModalOverlay
          title={props.title}
          input={props.input}
          onAdd={props.onAdd}
          onCancel={props.onCancel}
          onUpdate={props.onUpdate}
        />
      </CSSTransition>
    </>
  );
};

export default Modal;
