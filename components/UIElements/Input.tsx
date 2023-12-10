import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateInputValue } from '../../store/inputSlice';
import styles from './Input.module.css';
import { UpdateState } from '@/types/inputTypes';

export interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string | undefined;
  originValue: string | number | undefined;
}

const Input = (props: InputProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(props.originValue || '');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const updateTarget: UpdateState = {
      [props.id]: value,
    };

    setInputValue(value);
    dispatch(updateInputValue(updateTarget));
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        required
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
