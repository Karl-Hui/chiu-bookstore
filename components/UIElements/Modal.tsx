import { CSSTransition } from 'react-transition-group';

import { ModalProps } from '../../types/modalTypes';

import Button from '../UIElements/Button';
import Input from './Input';
import styles from './Modal.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ModalOverlay = (props: ModalProps) => {
  return (
    <>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <form className={styles.modal_form} onSubmit={props.onSubmitHandler}>
            <div className={styles.modal_header}>
              <h2>{props.title}</h2>
            </div>
            <div className={styles.modal_body}>
              <Input
                id="name"
                label="Title: "
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
            <div className={styles.modal_buttonContainer}>
              <Button type="button" onClick={props.onCancel} text="Cancel" />
              <Button type="submit" text={props.action} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  const show = useSelector((state) => state.modalSlice.show);

  return (
    <>
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={0}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
