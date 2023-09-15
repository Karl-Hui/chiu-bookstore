export interface AllBooksProps {
  showModalHandler: (args: {
    id: string;
    title: string;
    action: string;
  }) => void;
}
