import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./slice/crud-slice";

const store = configureStore({
  reducer: {
    crud: crudSlice.reducer,
  },
});

export default store;
