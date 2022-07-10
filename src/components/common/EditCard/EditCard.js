import React from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { changeMode } from "../../../store/mode/ModeSlice";
import { changeEditName, changeEditEmoji ,commitChanges, changeEditDescription, deleteEditTask } from "../../../store/task/TaskSlice";

import EditableEmoji from "../EditableEmoji/EditableEmoji";
import EditableDiv from "../EditableDiv/EditableDiv"
import EditStatusBtn from "../EditStatusBtn/EditStatusBtn";
import Button from "../Button/Button";

export default () => {

    const dispatch = useDispatch();
    const task = useSelector((state)=> state.task);
    
    const changeModeNormal = (e) => {
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

    const deleteTask = () => {
        dispatch(deleteEditTask());
        dispatch(changeMode('normal'))
    }


    return (
        <div onClick={changeModeNormal} id="back" className="absolute z-50 top-0 w-full h-full flex items-center justify-center bg-gray-300/50">
            <div className="border border-black min-w-[50vw] h-min bg-white">
                <div className="border flex justify-end">
                    <div id="back" onClick={changeModeNormal} className="border px-2 font-bold text-white bg-red-600 cursor-pointer">X</div>
                </div>
                <div className="p-5">
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
                                <td className="border "><EditableDiv resize={true} callback={editDescription}>{task.editTask.description}</EditableDiv></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-3">
                        <Button bg={'bg-green-600 mr-5'} callback={()=>{dispatch(changeMode('normal'))}}>Save</Button>
                        <Button bg={'bg-red-600'} callback={deleteTask}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}