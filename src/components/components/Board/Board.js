import React from "react";
import { useSelector } from "react-redux";

import ColBoard from "../ColBoard/ColBoard";
import EditCard from "../../common/EditCard/EditCard";

export default () => {
    const mode = useSelector((state) => state.mode);
    const tasks = useSelector((state) => state.task);
    
    const todo = tasks.value.filter(task => task.status == 'todo');
    const doing = tasks.value.filter(task => task.status == 'doing');
    const done = tasks.value.filter(task => task.status == 'done');
    


    return(
            <div className="grid grid-cols-3 gap-5">
                {mode.mode=='edit' && <EditCard />}
                <ColBoard tasks={todo} type="todo" />
                <ColBoard tasks={doing} type="doing" />
                <ColBoard tasks={done} type="done" />
            </div>

    )
}