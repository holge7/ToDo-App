import { createSlice } from "@reduxjs/toolkit";
import newTask from "../../objects/newTask";
import { defaultTask } from "../../objects/newTask";
import localStorageService from "../../sevice/localStotage";

const localStorage = new localStorageService('tasks');

const getInitialState = () => {
    const initial = localStorage.get();
    if (initial) return JSON.parse(initial)
    return defaultTask;
}

const initialState = getInitialState();


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
            localStorage.save(state);
        },
        deleteEditTask: (state) => {
            let taskDelete = state.value.findIndex(tasks => tasks.idTask == state.editTask.idTask);
            state.value.splice(taskDelete, 1);
            localStorage.save(state);
        },
        commitChanges: (state) => {
            let taskChange = state.value.findIndex(tasks => tasks.idTask == state.editTask.idTask);
            state.value[taskChange] = state.editTask;
            localStorage.save(state);
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