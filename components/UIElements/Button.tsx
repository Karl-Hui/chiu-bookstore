import styles from './Button.module.css';

interface ButtonProps {
  onClick?: (event: any) => void;
  text: string;
  danger?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${styles.custom_button} ${props.danger && styles.danger}`}
      onClick={props.onClick}
    >
      <div>{props.text}</div>
    </button>
  );
};

export default Button;
