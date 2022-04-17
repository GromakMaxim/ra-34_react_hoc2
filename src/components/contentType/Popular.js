import React from "react";

export default function Popular(props) {
    return (
        <div className='popular list-item pos-rel b1'>
            <div className='popular-pic pos-abs'/>
            {props.children}
        </div>
    );
}
