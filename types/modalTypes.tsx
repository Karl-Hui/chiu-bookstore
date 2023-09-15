export interface ModalProps {
  action: string;
  input?: { [key: string]: string | number };
  show?: boolean;
  onCancel?: (event: any) => void;
  onAdd?: (event: any) => void;
  onUpdate?: (event: any) => void;
  title: string;
  onSubmitHandler: (event: React.FormEvent) => void;
}
