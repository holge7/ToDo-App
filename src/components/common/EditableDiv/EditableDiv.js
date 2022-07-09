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
        <textarea rows={1} value={text} onChange={changeText} className={`w-full ${props.resize ? '' : 'resize-none'} focus:outline-none whitespace-pre-wrap`} />
    )
}