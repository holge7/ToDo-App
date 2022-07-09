import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeMode } from "../../../store/mode/ModeSlice";
import { changeEditName, changeEditEmoji ,commitChanges, changeEditDescription } from "../../../store/task/TaskSlice";

import EditableEmoji from "../EditableEmoji/EditableEmoji";
import EditableDiv from "../EditableDiv/EditableDiv"
import EditStatusBtn from "../EditStatusBtn/EditStatusBtn";

export default () => {

    const dispatch = useDispatch();
    const task = useSelector((state)=> state.task);
    
    const click = (e) => {
        if (e.target.id == 'back') dispatch(changeMode('normal'))
    }

    const changeName = (newName) => {
        dispatch(changeEditName(newName))
        dispatch(commitChanges())
    }

    const changeEmoji = (newEmoji) => {
        dispatch(changeEditEmoji(newEmoji))
        dispatch(commitChanges())
    }

    const editDescription = (newDescription) => {
        dispatch(changeEditDescription(newDescription));
        dispatch(commitChanges());
    }

    return (
        <div onClick={click} id="back" className="absolute z-50 top-0 w-full h-full flex items-center justify-center bg-gray-300/50">
            {task.editTask.idTask}
            <div className="border border-green-900 min-w-[50vw] min-h-[50vh] bg-white p-5">
                
                <div className="text-5xl">
                    <EditableEmoji callback={changeEmoji} {...task.editTask} />
                </div>

                <h1 className="text-3xl font-bold text-stone-800 my-3">
                    <EditableDiv callback={changeName}>{task.editTask.name}</EditableDiv>
                </h1>

                <table className="border-separate  border-spacing-y-3 w-4/5">
                    <tbody>
                        <tr>
                            <td className="w-1/3">🔽 Status </td>
                            <td>
                                <EditStatusBtn status={task.editTask.status} />
                            </td>
                        </tr>
                        <tr>
                            <td>🕐 Date Created </td>
                            <td>{task.editTask.date}</td>
                        </tr>
                        <tr>
                            <td>📋 Description </td>
                            <td className="border "><EditableDiv callback={editDescription}>{task.editTask.description}</EditableDiv></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}