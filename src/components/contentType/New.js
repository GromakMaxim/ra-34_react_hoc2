import React from "react";

export default function New(props) {
    return (
        <div className='new pos-rel'>
            <div className='new-pic pos-abs'/>
            {props.children}
        </div>
    );

}
