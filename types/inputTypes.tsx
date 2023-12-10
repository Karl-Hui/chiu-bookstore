export interface InputValueState {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface InputState {
  inputValue: InputValueState;
}

export interface UpdateState {
  [x: string]: string;
}
