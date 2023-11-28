import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) ?? [],
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
      //quiero guardar las tareas que tengo en locaStorage
      localStorage.setItem('tasks', JSON.stringify(newTasks));
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
      //quiero almacenar de nuevo mi informacion en localStorage
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      state.tasks = newTasks;
    },

    deleteTask: (state, action) => {
      const idTaskToDelete = action.payload;
      const newTask = state.tasks.filter((task) => task.id !== idTaskToDelete);
      //quiero almacenar la nueva informacion de las tareas
      localStorage.setItem('tasks', JSON.stringify(newTask));
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
      //quiero almacenar las tareas en localStoarge
      localStorage.setItem('tasks', JSON.stringify(newTasks));
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
