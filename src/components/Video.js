import React from "react";

export default function Video(props) {
    let url = "https://www.youtube.com/embed/" + props.data.v;
    return (
        <div className='player'>
            <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            <div className='watches'>Просмотры: {props.data.watch}</div>
        </div>
    );
}
