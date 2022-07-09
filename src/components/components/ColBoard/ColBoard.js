import React from "react";

import Task from "../../common/Task/Task";
import statusType from "../../../objects/status"

const getTasks = tasks => {
    return tasks.map((task, i)=><Task key={i}  {...task} />)
}

export default (props) => {

    let tasks = getTasks(props.tasks);
    return(
        <div className="grid grid-cols-1 grid-flow-row gap-4 h-min">
            <div className="flex">
                <div className={`mr-4 px-3 rounded ${statusType[props.type].bg} ${statusType[props.type].color}`}>
                    {statusType[props.type].name}
                </div>
                <div className="text-gray-500">{tasks.length}</div>
            </div>
            <div className="grid grid-cols-1 gap-1">
                {tasks}
                <Task ambit={props.type} />
            </div>
        </div>
    )
}