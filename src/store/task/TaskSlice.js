import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[
        {'idTask':'1', 'emoji':'', 'name':'Do the dinner', 'status':'doing'},
        {'idTask':'2', 'emoji':'', 'name':'Sleep', 'status':'todo'},
        {'idTask':'3', 'emoji':'', 'name':'Learn TypeScript', 'status':'todo'},
        {'idTask':'4', 'emoji':'', 'name':'Buy meet', 'status':'done'},
    ]
}


const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        changeStatus: (state, id) => {
            let taskChange = state.tasks.find(tasks => tasks.idTask = id);
        }
    }
});


export default taskSlice.reducer;