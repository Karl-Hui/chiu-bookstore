export interface ModalProps {
  input?: { [key: string]: string | number };
  show?: boolean;
  onCancel?: (event: any) => void;
  onAdd?: (event: any) => void;
  onUpdate?: (event: any) => void;
  title: string;
}
