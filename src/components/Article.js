import React from "react";

export default function Article(props) {
    return (
        <div className='article flex-col'>
            <a href={props.data.url} className='article-link'>
                {props.data.title}
            </a>
            <div className='watches'>Просмотры: {props.data.watch}</div>
        </div>
    );
}
