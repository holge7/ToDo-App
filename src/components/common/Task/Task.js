import React from "react";

import EditableEmoji from "../EditableEmoji/EditableEmoji";


export default (props) => {


    if (!props.name) {
        return(
            <div 
            className="drop-shadow-md cursor-pointer flex p-1 rounded
                    hover:bg-slate-200 transition"  
            > 
            <div className="flex font-bold items-end">
                <div className="mr-2 text-2xl">+</div>
                <div className="h-full flex items-center">New</div>
            </div>
            
            </div>
        )
    }
    return (
            <div 
                className="border drop-shadow-md cursor-pointer flex p-2 rounded
                hover:bg-slate-200 transition"  
            > 
                <div className="mr-2"><EditableEmoji /></div>
                <p>{props.name}</p>
            </div>
    )
}