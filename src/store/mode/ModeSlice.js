import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:'normal',
}

const mode = createSlice({
    name:'mode',
    initialState,
    reducers:{
        changeMode: (state, mode)=>{
            state.mode = mode.payload;
        }
    }
})

export const {changeMode} = mode.actions;
export default mode.reducer;