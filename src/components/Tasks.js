import React from 'react';

const data = [
    {
        imgsrc: 'http://tachyons.io/img/avatar-mrmrs.jpg',
        name: 'artist',
        info: 'some designing',
        price: '$900'
    },
    {
        imgsrc: 'http://tachyons.io/img/avatar-mrmrs.jpg',
        name: 'artist',
        info: 'some designing',
        price: '$900'
    },
    {
        imgsrc: 'http://tachyons.io/img/avatar-mrmrs.jpg',
        name: 'artist',
        info: 'some designing',
        price: '$900'
    },
    {
        imgsrc: 'http://tachyons.io/img/avatar-mrmrs.jpg',
        name: 'artist',
        info: 'some designing',
        price: '$900'
    }
];

const Tasks = props => {
    const { onClick } = props;

    const tasks = data.map((task, idx) => (
        <li
            key={idx}
            className=""
            onClick={e => {
                onClick(e, idx);
            }}>
            <img className="" src={task.imgsrc} alt="" />
            <div className="">
                <span className="">{task.name}</span>
                <span className="">{task.info}</span>
            </div>
            <div>
                <a href="tel:" className="">
                    {task.price}
                </a>
            </div>
        </li>
    ));

    return <ul className="">{tasks}</ul>;
};

export default Tasks;

// index rendering optimizations https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
