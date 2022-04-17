import React, {Component} from "react";
import Video from "./Video";
import Article from "./Article";
import Popular from "./contentType/Popular";
import New from "./contentType/New";

export default class Widget extends Component {

    contentData = [
        {
            id: 0,
            v: "KHQr27xsOD0",
            date: new Date(2022, 3, 17, 1, 20, 30),
            watch: 100
        },

        {
            id: 7,
            title: 'Невероятные события в неизвестном посёлке',
            url: 'www.ya.ru',
            watch: 300
        },

        {
            id: 8,
            title: 'Секретные данные были раскрыты',
            url: 'www.ya.ru',
            watch: 1534
        },

        {
            id: 1,
            v: "Hx9AfGs5cX4",
            date: new Date(2022, 3, 15, 1, 20, 30),
            watch: 8
        },

        {
            id: 2,
            v: "l557BwTjLII",
            date: new Date(2022, 3, 14, 1, 20, 30),
            watch: 1
        },

        {
            id: 3,
            v: "xYAHb0QvxVk", date: new Date(2022, 3, 13, 1, 20, 30),
            watch: 3456

        },

        {
            id: 9,
            title: 'Кот Бегемот обладает невероятной',
            url: 'www.ya.ru',
            watch: 113
        },

        {
            id: 4,
            v: "_ef78ndnotA",
            date: new Date(2022, 3, 12, 1, 20, 30),
            watch: 134
        },

        {
            id: 5,
            v: "4uO72SjFbqo",
            date: new Date(2022, 3, 11, 1, 20, 30),
            watch: 918
        },

    ]

    constructor(props, context) {
        super(props, context);
    }

    renderArray() {
        let resultArray = [];
        for (let item of this.contentData) {
            if (item.v !== null && item.v !== undefined) {
                const Wrapper = withHOC(Video);
                resultArray.push(<Wrapper key={item.id} data={item}/>)
            } else {
                const Wrapper = withHOC(Article);
                resultArray.push(<Wrapper key={item.id} data={item}/>);
            }
        }

        return resultArray;

    }

    render() {
        return (
            <div className='list flex-row'>
                {this.renderArray()}
            </div>
        )

    }


}


function withHOC(Component) {
    function Wrapper(props) {
        console.log(props.data);
        if (props.data.watch >= 1000) {
            return (
                <Popular>
                    <Component {...props}/>
                </Popular>
            );
        } else {
            return (
                <New>
                    <Component {...props}/>
                </New>
            );
        }

    }

    return Wrapper;
}
