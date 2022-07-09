import React from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEditTask,commitChanges } from "../../../store/task/TaskSlice";

import statusType from "../../../objects/status";


export default (props)=>{

    const [editState, setEditState] = useState(false);
    const [status, setStatus] = useState(props.status);
    const editTask = useSelector(state=>state.task);
    const dispatch = useDispatch();


    const changeStatus = (newStatus) =>{
        setEditState(!editState);
        setStatus(newStatus);

        let newTask = {...editTask.editTask};
        newTask.status = newStatus;

        dispatch(addEditTask(newTask))
        dispatch(commitChanges());
    }


    
    const getStatus = () => {
        return Object.keys(statusType).map((status, i) => {
                return (
                    <div key={i} className="flex items-center hover:bg-slate-200 transition cursor-pointer py-1" onClick={()=>changeStatus(status)}>
                        <div>::&nbsp;</div>
                        <div className={`rounded px-3 w-max text-center border border-black ${statusType[status].bg} ${statusType[status].color}`} >
                            {statusType[status].name}
                        </div>
                    </div>
                )
        })
    }

    return(
        <div className="relative">
            <div onClick={()=>setEditState(!editState)} className={`rounded px-3 w-max text-center cursor-pointer ${statusType[status].bg} ${statusType[status].color}`} >
                {statusType[status].name}
            </div>
            {editState && 

                <div className="drop-shadow-md p-3 absolute bg-white">
                    <p>Select an option</p>
                    <div className="grid grid-flow-row gap-2 w-96">
                        {getStatus()}
                    </div>
                </div>

            }
        </div>
    )
}