import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './task/TaskSlice'
import ModeReducer from "./mode/ModeSlice";

export const store = configureStore({
    reducer:{
        task: TaskReducer,
        mode: ModeReducer,
    }
});