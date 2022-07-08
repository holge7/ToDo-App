import React, { useEffect, useState } from "react";
import Picker from 'emoji-picker-react';

export default (props) => {
    const [emoji, SetEmoji] = useState(props.emoji ?? {'emoji':'😀'});
    const [selectEmoji, SetSelectEmoji] = useState(false)

    const onEmojiClick = (e, emojiObject) => {
        SetSelectEmoji(false);
        SetEmoji(emojiObject);
        console.log("aaaa")
    }


    return(
        <div onClick={()=>{SetSelectEmoji(!selectEmoji)}}>
            {emoji.emoji}
            <div className="absolute z-10">
                {selectEmoji && 
                    <Picker native disableSearchBar onEmojiClick={onEmojiClick} />
                }
            </div>
        </div>
    )
}