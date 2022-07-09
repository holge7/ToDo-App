import React from "react";

export default (props) => {

    const click = () => {
        if (props.callback) {
            props.callback();
        }
    }

    return(
        <button onClick={click} className={` ${props.bg ?? 'bg-[#070710]'} text-white px-7 py-1 text-mg rounded-full font-bold`}>
            {props.children}
        </button>
    )
}