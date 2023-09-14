import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateInputValue } from '../../store/inputSlice';
import { InputProps } from '../../types/inputTypes';
import styles from './Input.module.css';

const Input = (props: InputProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(props.originValue || '');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let { value }: any = event.target;
    const { type } = event.target;
    if (type == 'number') {
      value = Number(value);
    }
    const updateTarget = {
      [props.id]: value,
    };
    setInputValue(value);
    dispatch(updateInputValue(updateTarget));
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={styles.custom_input}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputValue}
        type={props.type}
      />
    </div>
  );
};

export default Input;
