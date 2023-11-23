import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  isModalOpen: false,
};

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {
    changeShowModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },

    addTask: (state, action) => {
      const newTasks = [...state.tasks, action.payload];
      state.tasks = newTasks;
    },
  },
});

export const { changeShowModal, addTask } = todoSlice.actions;

export default todoSlice.reducer;
