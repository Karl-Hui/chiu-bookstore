import styles from './Button.module.css';

export interface ButtonProps {
  text: string;
  danger: boolean;
  type: 'submit' | 'button' | 'reset';
  onClick?: (event: React.FormEvent) => void;
}

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
