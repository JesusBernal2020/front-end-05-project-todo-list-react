import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  isModalOpen: false,
  taskToEdit: null,
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
    changeDoneTask: (state, action) => {
      //action.paylod
      const idTaskToSearch = action.payload;
      const newTasks = state.tasks.map((task) => {
        if (task.id === idTaskToSearch) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      });
      state.tasks = newTasks;
    },

    deleteTask: (state, action) => {
      const idTaskToDelete = action.payload;
      const newTask = state.tasks.filter((task) => task.id !== idTaskToDelete);
      state.tasks = newTask;
    },

    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;
    },

    updateTask: (state, action) => {
      const infoUpdateTask = action.payload;
      const newTasks = state.tasks.map((task) => {
        if (task.id === state.taskToEdit.id) {
          return { ...task, ...infoUpdateTask };
        } else {
          return task;
        }
      });
      state.tasks = newTasks;
    },
  },
});

export const {
  changeShowModal,
  addTask,
  changeDoneTask,
  deleteTask,
  setTaskToEdit,
  updateTask,
} = todoSlice.actions;

export default todoSlice.reducer;
