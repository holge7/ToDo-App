import { createSlice } from "@reduxjs/toolkit";

const saveStore = (state)=>{
    console.log("hola")
    const storage = window.localStorage
    storage.setItem('header', JSON.stringify(state))
}

const defaultState = {
    value:{
        emoji:'✔',
        title:'Task List',
        description:"Use this template to track your personal tasks. Click + New to create a new task directly on this board. Click an existing task to add additional context or subtasks.",
    }
}

const getInitialValue = () => {
    const initial =  window.localStorage.getItem('header')
    if (initial) return JSON.parse(initial)
    return defaultState
}

const initialState = getInitialValue();

const headerSlice = createSlice({
    name:'header',
    initialState,
    reducers:{
        changeEmoji: (state, newEmoji) => {
            state.value.emoji = newEmoji.payload
            saveStore(state)
        },
        changeTitle: (state, newTitle) => {
            state.value.title = newTitle.payload
            saveStore(state)
        },
        changeDescription: (state, newDescription) => {
            state.value.description = newDescription.payload
            saveStore(state)
        }
    }
});

export default headerSlice.reducer;
export const {
    changeEmoji,
    changeTitle,
    changeDescription
} = headerSlice.actions;