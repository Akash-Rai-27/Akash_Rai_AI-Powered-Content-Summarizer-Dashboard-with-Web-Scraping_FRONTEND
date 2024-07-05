import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null,
    userId: null,
    userName: null,
    content: null,
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers : {
        login : (state, action)=>{
            state.status = true;
            state.userData = action.payload
            // if(state.status){
            //     state.userId = state.userData.$id
            //     state.userName = state.userData.name
            // }
            
            state.userId = state.userData.$id
            state.userName = state.userData.name
            
        },

        logout : (state)=> {
            state.status = false;
            state.userData = null;
            state.userId = null;
            state.userName = null;
            state.content = null;
        },

        getData: (state,action)=>{
            if(state.status){
                state.content = action.payload
            }
        }
    }
})


export const{login, logout, getData} = authSlice.actions;


export default authSlice.reducer;