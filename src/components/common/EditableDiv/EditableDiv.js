import React from "react";

export default (props) => {

    return(
        <div contentEditable suppressContentEditableWarning={true} className="w-full resize-none focus:outline-none whitespace-pre-wrap">
            {props.children}
        </div>
    )
}