import { configureStore } from '@reduxjs/toolkit';
import todo from './slices/todo.slice';

export default configureStore({
  reducer: {
    //aqui van todos nuestros estados globales
    todo,
  },
});

// TODO: TERMINAR MANAÑA QUEDAMOS EN EL MINUTO 1:07:33
