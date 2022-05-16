import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, title: "Batman" },
    { id: 2, title: "Spiderman no way home" },
    { id: 3, title: "guardians of the galaxy" },
  ],
  status: false,
  currentItem: { id: null, title: "" },
};

const crudSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },
    update(state, action) {
      const newItem = action.payload;
      const item = state.data.find((item) => item.id === newItem.id);
      item.title = newItem.title;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
    delete(state, action) {
      const id = action.payload.id;
      const index = state.data.findIndex((item) => item.id === id);
      state.data.splice(index, 1);
    },
    currentItem(state, action) {
      state.currentItem = action.payload;
    },
  },
});

export const crudAction = crudSlice.actions;

export default crudSlice;
