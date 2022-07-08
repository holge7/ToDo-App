import React from "react";
import { useSelector } from "react-redux";

import ColBoard from "../ColBoard/ColBoard";

export default () => {

    const tasks = useSelector((state) => state.task);
    
    const todo = tasks.value.filter(task => task.status == 'todo');
    const doing = tasks.value.filter(task => task.status == 'doing');
    const done = tasks.value.filter(task => task.status == 'done');
    console.log(todo)

    return(
            <div className="grid grid-cols-3 gap-5">
                <ColBoard tasks={todo} type="todo" />
                <ColBoard tasks={doing} type="doing" />
                <ColBoard tasks={done} type="done" />
            </div>

    )
}