import React from "react";

export default function New(props) {
    return (
        <div className='new list-item pos-rel b1'>
            <div className='new-pic pos-abs'/>
            {props.children}
        </div>
    );

}
