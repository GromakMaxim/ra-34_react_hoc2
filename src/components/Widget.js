import React from "react";
import AnyContentItem from "./AnyContentItem";

export default function Widget(props) {

    let contentData = [
        {
            id: 0,
            v: "KHQr27xsOD0",
            date: new Date(2022, 3, 17, 1, 20, 30),
            watch: 99
        },

        {
            id: 7,
            title: 'Невероятные события в неизвестном посёлке',
            url: 'www.ya.ru',
            watch: 3000
        },

        {
            id: 8,
            title: 'Секретные данные были раскрыты',
            url: 'www.ya.ru',
            watch: 300
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
            watch: 1100
        },

        {
            id: 3,
            v: "xYAHb0QvxVk", date: new Date(2022, 3, 13, 1, 20, 30),
            watch: 999

        },

        {
            id: 9,
            title: 'Кот Бегемот обладает невероятной',
            url: 'www.ya.ru',
            watch: 50
        },

        {
            id: 4,
            v: "_ef78ndnotA",
            date: new Date(2022, 3, 12, 1, 20, 30),
            watch: 1
        },

        {
            id: 5,
            v: "4uO72SjFbqo",
            date: new Date(2022, 3, 11, 1, 20, 30),
            watch: 918
        },

    ]


    function renderArray() {
        let resultArray = [];
        contentData.forEach(item => {
            resultArray.push(<AnyContentItem key={item.id} data={item}/>)
        })

        return resultArray;

    }

    return (
        <div className='list flex-col'>
            {renderArray()}
        </div>
    )
}
