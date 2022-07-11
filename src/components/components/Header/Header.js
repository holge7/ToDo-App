import React from "react";

import EditableDiv from "../../common/EditableDiv/EditableDiv";
import EditableIncon from "../../common/EditableEmoji/EditableEmoji";

import { useSelector, useDispatch } from "react-redux";
import { changeEmoji, changeTitle, changeDescription } from "../../../store/header/HeaderSlice";

export default () => {

    const dispatch = useDispatch();
    const header = useSelector((state)=>state.header)

    const editEmoji = (newEmoji) => { dispatch(changeEmoji(newEmoji)) }
    const editTitle = (newTitle) => { dispatch(changeTitle(newTitle)) }
    const editDescription = (newDescription) => { dispatch(changeDescription(newDescription)) }

    return (
        <div className="grid grid-cols-12 pb-4">
            <div className="text-3xl font-bold text-[#37352F] col-span-12 flex items-center mb-3">
                <div className="cursor-pointer hover:bg-slate-200 rounded">
                    <EditableIncon callback={editEmoji} emoji={header.value.emoji}/>
                </div>
                <EditableDiv callback={editTitle} >{header.value.title}</EditableDiv>
            </div>
            <div className="col-span-4">
                <EditableDiv callback={editDescription} >           
                    {header.value.description}
                </EditableDiv>
            </div>

        </div>
    )
}