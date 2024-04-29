import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }){
    let emojis= ''
    const timeTaken = (minutes)=>{
        if (minutes <= 30){
            const cups = Math.ceil(minutes / 5);
            emojis ='☕️'.repeat(cups)
        } else {
            const bento = Math.ceil(minutes / 10);
            emojis = '🍱'.repeat(bento)
        }
        return `${emojis} ${minutes} min read`
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}. {timeTaken(minutes)}</small>
            <p>{preview}</p>
        </article>
    );

}

export default Article;
