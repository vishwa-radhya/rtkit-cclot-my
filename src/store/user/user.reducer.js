import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  currentUser: null,
};

//create not only creates reducers but also actions and action types
export const userSlice=createSlice({
  name:'user',
  initialState:INITIAL_STATE,
  reducers:{
    setCurrentUser(state,action){
      state.currentUser=action.payload;
    },
  }
});
//above even though it looks like mutable under the hood a new object is passed
//redux-toolkit is leveraging a library called immer that is ensuring that
//these changes that look like mutations sctually arent mutations
//they are just eaier to read


//state should be immutable meaning everytime a new value should be passed to it 
//without actually touching it

export const {setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;