import { useDispatch, useSelector } from 'react-redux';

import Book from './Book';

import styles from './AllBooks.module.css';

const AllBook = () => {
  const dispatch = useDispatch();

  const books: [] = useSelector((state: any) => state.bookList.value);

  return (
    <>
      <div className={styles.bookContainer}>
        {books?.map(
          (book: {
            id: string;
            name: string;
            price: number;
            category: string;
            description: string;
            image: string;
          }) => {
            return (
              <div key={book.id}>
                <Book
                  key={book.id}
                  id={book.id}
                  name={book.name}
                  price={book.price}
                  category={book.category}
                  description={book.description}
                  image={book.image}
                ></Book>
              </div>
            );
          }
        )}
      </div>
      {books?.length === 0 && (
        <div>No book yes. Please press New Book button to your first book!</div>
      )}
    </>
  );
};

export default AllBook;
