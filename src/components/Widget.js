import React, {Component} from "react";
import Player from "./Player";

export default class Widget extends Component {

    videoArr = [
        {
            id: 0,
            v: "KHQr27xsOD0",
            date: new Date(2022, 3, 17, 1, 20, 30)
        },

        {
            id: 1,
            v: "Hx9AfGs5cX4",
            date: new Date(2022, 3, 15, 1, 20, 30)
        },

        {
            id: 2,
            v: "l557BwTjLII",
            date: new Date(2022, 3, 14, 1, 20, 30)
        },

        {
            id: 3,
            v: "xYAHb0QvxVk",date: new Date(2022, 3, 13, 1, 20, 30)

        },

        {
            id: 4,
            v: "_ef78ndnotA",
            date: new Date(2022, 3, 12, 1, 20, 30)
        },

        {
            id: 5,
            v: "4uO72SjFbqo",
            date: new Date(2022, 3, 11, 1, 20, 30)
        },

    ]

    constructor(props, context) {
        super(props, context);
    }

    getBeautifulDate(d, id, url){
        let current = new Date();

        let timeDiff = Math.abs(current.getTime() - d.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        switch (diffDays) {
            case 0: return <Player key={id} url={url} date='Видео загружено сегодня'/>
            case 1: return <Player key={id} url={url} date='Видео загружено вчера'/>
            case 2: return <Player key={id} url={url} date='Видео загружено 2 дня назад'/>
            case 3: return <Player key={id} url={url} date='Видео загружено 3 дня назад'/>
            case 4: return <Player key={id} url={url} date='Видео загружено 4 дня назад'/>
            case 5: return <Player key={id} url={url} date='Видео загружено 5 дней назад'/>
            case 6: return <Player key={id} url={url} date='Видео загружено 6 дней назад'/>
            case 7: return <Player key={id} url={url} date='Видео загружено неделю назад'/>
            default: return <Player key={id} url={url} date='Видео загружено давно...'/>
        }
    }

    render() {
        let arr = [];
        this.videoArr.forEach(video => {
                arr.push(
                    this.getBeautifulDate(video.date, video.id, video.v)
                );
            }
        );
        return (
            <div className='list flex-row'>
                {arr}
            </div>
        );
    }
}
