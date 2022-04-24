/**
 * defines popular or new
 * @param Component
 */
import React from "react";
import New from "../contentType/New";
import Popular from "../contentType/Popular";

export default function withPopularity(Component) {
    function HOCPopularityWrapper(props) {
        if (props.data.watch > 1000) {
            return <Popular>
                <Component{...props}/>
            </Popular>
        } else if (props.data.watch < 100) {
            return <New {...props}>
                <Component{...props}/>
            </New>
        } else {
            return <Component {...props}/>
        }
    }

    return HOCPopularityWrapper;

}
