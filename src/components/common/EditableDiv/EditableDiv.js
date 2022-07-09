import React from "react";

import { useState } from "react";

export default (props) => {
    const [text, setText] = useState(props.children ?? '');
    const changeText = (e) => {

        setText(e.target.value)
        if (props.callback) {
            props.callback(e.target.value)
        }
    }

    return(
        <input value={text} onChange={changeText} className="w-full resize-none focus:outline-none whitespace-pre-wrap" />
    )
}