import { createSlice } from "@reduxjs/toolkit";

const initialState={sidebarButtonPressed:false}

const sidebarSlice= createSlice({
    name:'sidebarbutton',
    initialState,
    reducers:{
        toggal(state){
           state.sidebarButtonPressed=!state.sidebarButtonPressed; // eslint-disable-line no-param-reassign
        }
    }
})


export const sidebarButtonActions=sidebarSlice.actions

export default sidebarSlice;