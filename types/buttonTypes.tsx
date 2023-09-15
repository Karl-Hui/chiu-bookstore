export interface ButtonProps {
  onClick?: (event: any) => void;
  text: string;
  danger?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
}
