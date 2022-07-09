import React from "react";
import { changeMode } from "../../../store/mode/ModeSlice";
import { addEditTask, createTask } from "../../../store/task/TaskSlice";
import { useDispatch } from "react-redux";

export default (task) => {

    const dispatch = useDispatch()

    const editMode = (e) => {
        dispatch(changeMode('edit'))
        dispatch(addEditTask(task))
    }

    const createNewTask = () => {
        dispatch(createTask(task.ambit))
        dispatch(changeMode('edit'))
    }

    if (!task.name) {
        return(
            <div onClick={createNewTask} className="drop-shadow-md cursor-pointer flex p-1 rounded hover:bg-slate-200 transition"> 

                <div className="flex font-bold items-end">
                    <div className="mr-2 text-2xl">+</div>
                    <div className="h-full flex items-center">New</div>
                </div>
            
            </div>
        )
    }
    return (
            <div className="border drop-shadow-md flex justify-between p-2 rounded hover:bg-slate-200 transition"> 

                <div className="flex">
                    <div className="mr-2">{task.emoji}</div>
                    <p>{task.name}</p>
                </div>
                <div className="cursor-pointer border flex" onClick={editMode}>⚙</div>
            
            </div>
    )
}