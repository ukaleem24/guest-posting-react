import { configureStore } from "@reduxjs/toolkit";
import sidebarButtonSlice from "./sidebar-button-slice";


const store =configureStore({
  reducer: sidebarButtonSlice.reducer
});

export default store;