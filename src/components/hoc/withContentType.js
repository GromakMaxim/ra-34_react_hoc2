/**
 * function defines video or article
 * @param Component
 */
import Article from "../Article";
import React from "react";
import Video from "../Video";

export default function withContentType(Component) {
    function HOCTypeWrapper(props) {
        if (props.data.v !== null && props.data.v !== undefined) {
            return <Video {...props}/>
        } else {
            return <Article {...props}/>
        }
    }

    return HOCTypeWrapper;
}
