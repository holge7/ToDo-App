import React, { useState } from "react";
import Picker from 'emoji-picker-react';

import { useSelector } from "react-redux";

export default (props) => {
    const [selectEmoji, SetSelectEmoji] = useState(false)
    
    const editTask = useSelector(state => state.task.editTask)
    
    const onEmojiClick = (e, emojiObject) => {
        SetSelectEmoji(false);
        if (props.callback) {
            props.callback(emojiObject.emoji)
        }
    }


    return(
        <div className="cursor-pointer" onClick={()=>{SetSelectEmoji(!selectEmoji)}}>
            {editTask.emoji}
            <div className="absolute z-10">
                {selectEmoji && 
                    <Picker native disableSearchBar onEmojiClick={onEmojiClick} />
                }
            </div>
        </div>
    )
}