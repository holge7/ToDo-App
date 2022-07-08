import React from "react";

import EditableDiv from "../components/common/EditableDiv/EditableDiv";
import EditableIncon from "../components/common/EditableEmoji/EditableEmoji";

export default () => {

    return (
        <div className="grid grid-cols-12">
            <h1 className="text-3xl font-bold text-[#37352F] col-span-12 flex items-center ">
                <div className="cursor-pointer hover:bg-slate-200 rounded">
                    <EditableIncon emoji={{'emoji':'✔'}}/>
                </div>
                <EditableDiv>Task List</EditableDiv>
            </h1>
            <div className="col-span-12">
                <EditableDiv>                     
                    Use this templa, nmmmmmmmmmmmmmte to track your personal tasks.
                    Click + New to create a new task directly on this board.
                    Click an existing task to add additional context or subtasks.
                </EditableDiv>
            </div>

        </div>
    )
}