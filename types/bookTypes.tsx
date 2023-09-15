import { AllBooksProps } from './allBooksTypes';

export interface BookProps extends AllBooksProps {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
