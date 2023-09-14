import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: '1',
      name: 'The Art of Home: A Designer Guide to Creating an Elevated Yet Approachable Home',
      price: 49.99,
      category: 'Decorating Projects',
      description:
        'The long-awaited design book from Shea McGee, beautifully showcasing all that is possible for every room of your home.',
      image:
        'https://m.media-amazon.com/images/I/719N-Qle5NL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: '2',
      name: 'The Little Book Of Living Small',
      price: 37.99,
      category: 'Decorating Projects',
      description:
        'A comprehensive guide to small-space secrets and real-life solutions for living in 1,200 square feet or less.',
      image:
        'https://images.food52.com/YqWvnynEOvaYc2BHbZgOvQNnafk=/1200x900/3bd1cbf9-0df7-4e92-8b56-f83193860d39--Alisa_Regas_Little_Book_Of_Living_Small-2.jpg',
    },
    {
      id: '3',
      name: 'The Carousel Of Animals',
      price: 25.99,
      category: 'Interior Design',
      description:
        'A lion riding a dog, monkeys boxing a kangaroo, a fox riding a fire engine.',
      image:
        'https://3.bp.blogspot.com/-OFwTTgvdtXU/Wq2gweRyfRI/AAAAAAAANQA/L2yjeOCyDbw5K3BMI__euHFIGxFBDaLegCK4BGAYYCw/s1600/71hg5K2AvtL.jpg',
    },
  ],
};

export const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => {
      const newValue = state.value.filter((book) => book.id !== action.payload);
      state.value = newValue;
    },
    updateBook: (state, action) => {
      const { id } = action.payload.inputValue;

      const bookIndex = state.value.findIndex((book) => {
        return book.id === id;
      });

      if (bookIndex !== -1) {
        state.value[bookIndex] = {
          ...state.value[bookIndex],
          ...action.payload.inputValue,
        };
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
