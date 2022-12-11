import { createSlice } from "@reduxjs/toolkit";

const initialState={sidebarButtonPressed:false}

const sidebarButtonSlice= createSlice({
    name:'sidebarbutton',
    initialState,
    reducers:{
        toggal(state){
           state.sidebarButtonPressed=!state.sidebarButtonPressed; // eslint-disable-line no-param-reassign
        }
    }
})


export const sidebarButtonActions=sidebarButtonSlice.actions

export default sidebarButtonSlice;