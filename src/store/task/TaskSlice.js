import { createSlice } from "@reduxjs/toolkit";
import newTask from "../../objects/newTask";

const initialState = {
    value:[
        {'idTask':'1', 'description':null, 'emoji':'📋', 'name':'Do the dinner', 'status':'doing', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
        {'idTask':'2', 'description':null, 'emoji':'📋', 'name':'Sleep', 'status':'todo', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
        {'idTask':'3', 'description':null, 'emoji':'😎', 'name':'Learn TypeScript', 'status':'todo', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
        {'idTask':'4', 'description':null, 'emoji':'📋', 'name':'Buy meet', 'status':'done', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
    ],
    lastId:'4',
    editTask:null,
}


const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        createTask: (state, ambit) => {
            const newTaskk = {...newTask}
            state.lastId = ++state.lastId;
            newTaskk.idTask = state.lastId;
            newTaskk.status = ambit.payload;
            state.value.push(newTaskk);
            state.editTask = newTaskk;
        },
        deleteEditTask: (state) => {
            let taskDelete = state.value.findIndex(tasks => tasks.idTask == state.editTask.idTask);
            state.value.splice(taskDelete, 1);
        },
        commitChanges: (state) => {
            let taskChange = state.value.findIndex(tasks => tasks.idTask == state.editTask.idTask);
            state.value[taskChange] = state.editTask;
        },
        addEditTask: (state, task) => {
            state.editTask = task.payload;
        },
        changeEditName: (state, newName) => {
            state.editTask.name = newName.payload;
        },
        changeEditEmoji: (state, newEmoji) => {
            state.editTask.emoji = newEmoji.payload;
        },
        changeEditDescription: (state, newDescription) => {
            state.editTask.description = newDescription.payload;
        }
    }
});


export default taskSlice.reducer;
export const { commitChanges, 
    addEditTask, 
    changeEditName, 
    changeEditEmoji, 
    changeEditDescription, 
    deleteEditTask,
    createTask } = taskSlice.actions;