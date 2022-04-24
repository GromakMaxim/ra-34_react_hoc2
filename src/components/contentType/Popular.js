import React from "react";

export default function Popular(props) {

    return (
        <div className='popular pos-rel'>
            <div className='popular-pic pos-abs'/>
            {props.children}
        </div>
    );
}
