import { configureStore } from "@reduxjs/toolkit";

import TaskReducer from './task/TaskSlice'
import ModeReducer from "./mode/ModeSlice";
import HeaderSlice from "./header/HeaderSlice";

export const store = configureStore({
    reducer:{
        task: TaskReducer,
        mode: ModeReducer,
        header: HeaderSlice,
    }
});