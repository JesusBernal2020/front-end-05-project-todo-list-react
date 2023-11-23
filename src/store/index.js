import { configureStore } from '@reduxjs/toolkit';
import todo from './slices/todo.slice';

export default configureStore({
  reducer: {
    //aqui van todos nuestros estados globales
    todo,
  },
});
