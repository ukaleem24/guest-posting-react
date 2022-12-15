import { configureStore } from '@reduxjs/toolkit';
import sidebarButtonSlice from './sidebar-button-slice';
import sidebarSlice from './sidebar-slice';
import UserTypeSlice from './user-type-slice';

const store = configureStore({
  reducer: {
    sidebarButton: sidebarButtonSlice.reducer,
    sidebar: sidebarSlice.reducer,
    usertype: UserTypeSlice.reducer,
  },
});

export default store;
