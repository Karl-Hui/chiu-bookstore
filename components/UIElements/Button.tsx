import { ButtonProps } from '../../types/buttonTypes';

import styles from './Button.module.css';

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styles.custom_button} ${props.danger && styles.danger}`}
      onClick={props.onClick}
      type={props.type}
    >
      <div>{props.text}</div>
    </button>
  );
};

export default Button;
