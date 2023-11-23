import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  isModalOpen: false,
};

const todoSlice = createSlice({
  initialState,
  name: 'todo',
  reducers: {},
});

export default todoSlice.reducer;
