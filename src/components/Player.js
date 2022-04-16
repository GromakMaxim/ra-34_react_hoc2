import React from "react";

export default function Player(props) {
    let url = "https://www.youtube.com/embed/" + props.url;
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
            <div className='dateField'>{props.date.toLocaleString()}</div>
        </div>
    );
}
