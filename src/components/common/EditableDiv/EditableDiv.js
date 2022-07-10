import React, { useEffect, useRef } from "react";

import { useState } from "react";

export default (props) => {
    const [text, setText] = useState(props.children ?? '');
    const changeText = (e) => {
        setText(e.target.value)
        if (props.callback) {
            props.callback(e.target.value)
        }
    }

    const area = useRef()

    useEffect(()=>{
        area.current.style.height = area.current.scrollHeight+"px";
    })

    return(
        <textarea 
            ref={area} 
            rows={1}
            value={text} 
            onChange={changeText} 
            className={`w-full ${props.resize ? '' : 'resize-none overflow-hidden'} h-50 focus:outline-none whitespace-pre-wrap`} 
        />
    )
}