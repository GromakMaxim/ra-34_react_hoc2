import React from "react";

export default function Article(props) {
    return (
        <div className='articleWrapper'>
            <a href={props.data.url} className='article'>
                {props.data.title}
            </a>
            <div className='watches'>Просмотры: {props.data.watch}</div>
        </div>
    );
}
