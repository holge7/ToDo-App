import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './task/TaskSlice'

export const store = configureStore({
    reducer:{
        task: TaskReducer,
    }
});