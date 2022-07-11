import { createSlice } from "@reduxjs/toolkit";
import defaultHeader from "../../objects/header";
import localStorageService from "../../sevice/localStotage";


const localStorage = new localStorageService('header');


const getInitialValue = () => {
    const initial =  localStorage.get()
    if (initial) return JSON.parse(initial)
    return defaultHeader
}

const initialState = getInitialValue();

const headerSlice = createSlice({
    name:'header',
    initialState,
    reducers:{
        changeEmoji: (state, newEmoji) => {
            state.value.emoji = newEmoji.payload
            localStorage.save(state);
        },
        changeTitle: (state, newTitle) => {
            state.value.title = newTitle.payload
            localStorage.save(state);
        },
        changeDescription: (state, newDescription) => {
            state.value.description = newDescription.payload
            localStorage.save(state);
        }
    }
});

export default headerSlice.reducer;
export const {
    changeEmoji,
    changeTitle,
    changeDescription
} = headerSlice.actions;