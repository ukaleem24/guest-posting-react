import { createSlice } from '@reduxjs/toolkit';
// import React from 'react';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    buyerSidebar: [
      {
        id:1,
        name: 'Publishers',
        icon:"simple-icon-people",
        link:"/marketer/publishers",
      },
      {
        id:2,
        name: 'Open Offers',
        icon:"iconsminds-data-center",
        link:"/notfound",
      },
      {
        id:3,
        name: 'Task',
        icon:"simple-icon-people",
        link:"/marketer/tasks",
      },
      {
        id:4,
        name: 'Content Purchase',
        icon:"iconsminds-pen",
        link:"/marketer/content-purchase",
      },
    ],
    publisherSidebar: [
        {
          id:1,
          name: 'My Websites',
          icon:"simple-icon-people",
          link:"/publisher/platform",
        },
        {
          id:2,
          name: 'Open Offers',
          icon:"iconsminds-data-center",
          link:"/publisher/offer",
        },
        {
          id:3,
          name: 'Task',
          icon:"simple-icon-people",
          link:"/publisher/task",
        },
        
      ],
  },
  reducers:{
    toggal(state){
        console.log(state.buyerSidebar);
     }

  }
});
export const sidebarActions=sidebarSlice.actions
export default sidebarSlice;
