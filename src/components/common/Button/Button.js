import React from "react";

export default (props) => {

    return(
        <button className="bg-[#070710] text-white px-10 py-4 text-xl rounded-full font-bold">
            {props.children}
        </button>
    )
}