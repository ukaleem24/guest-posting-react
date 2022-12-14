import { createSlice } from '@reduxjs/toolkit';


const UserTypeSlice = createSlice({
    name:'UserType',
    initialState:{userType:"buyer"},
    reducers:{
        ChangeUserType(state){
            console.log("level1");
            if(state.userType==="buyer")
                state.userType="publisher"; // eslint-disable-line no-param-reassign
            else if(state.userType==="publisher")
            state.userType="buyer"; // eslint-disable-line no-param-reassign
        }
    }
})

export const UserTypeActions=UserTypeSlice.actions

export default UserTypeSlice