import { CSSTransition } from 'react-transition-group';

import Button from '../UIElements/Button';
import Input from './Input';
import styles from './Modal.module.css';
import { InputState, InputValueState } from '@/types/inputTypes';

export interface ModalProps {
  title: string;
  action: string;
  input: InputValueState;
  show: boolean;
  onCancel: (event: React.FormEvent) => void;
  onSubmitHandler: (event: React.FormEvent) => void;
  onAdd?: (event: React.FormEvent) => void;
  onUpdate?: (event: React.FormEvent) => void;
}

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
                placeholder="Title"
              ></Input>
              <Input
                id="price"
                label="Price: "
                type="number"
                originValue={props.input?.price || ''}
                placeholder="Price"
              ></Input>
              <Input
                id="category"
                label="Category: "
                type="text"
                originValue={props.input?.category || ''}
                placeholder="Category"
              ></Input>
              <Input
                id="description"
                label="Description: "
                type="text"
                originValue={props.input?.description || ''}
                placeholder="Description"
              ></Input>
            </div>
            <div className={styles.modal_buttonContainer}>
              <Button
                type="button"
                onClick={props.onCancel}
                text="Cancel"
                danger={false}
              />
              <Button type="submit" text={props.action} danger={false} />
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
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
