import React from "react";

import Task from "../../common/Task/Task";

const type = {
    'todo':{
        name:'To do',
        bg:'bg-red-200',
        color:'text-red-900'
    },
    'doing':{
        name:'Doing',
        bg:'bg-amber-100',
        color:'text-amber-900'
    },
    'done':{
        name:'Done',
        bg:'bg-green-200 ',
        color:'text-green-900'
    }
}

const getTasks = tasks => {
    return tasks.map((task, i)=><Task key={i} name={task.name} />)
}

export default (props) => {



    return(
        <div className="grid grid-cols-1 grid-flow-row gap-4 h-min">
            <div className="flex">
                <div className={`mr-4 px-3 rounded ${type[props.type].bg} ${type[props.type].color}`}>
                    {type[props.type].name}
                </div>
                <div className="text-gray-500">3</div>
            </div>
            <div className="grid grid-cols-1 gap-1 border border-red-400">
                {getTasks(props.tasks)}
                <Task />
            </div>
        </div>
    )
}