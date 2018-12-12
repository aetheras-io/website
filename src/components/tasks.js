import React from 'react'

export default props => {
    const { onClick } = props;
    const data = [
        { imgsrc: "http://tachyons.io/img/avatar-mrmrs.jpg", name: 'artist', info: 'some designing', price: '$900' },
        { imgsrc: "http://tachyons.io/img/avatar-mrmrs.jpg", name: 'artist', info: 'some designing', price: '$900' },
        { imgsrc: "http://tachyons.io/img/avatar-mrmrs.jpg", name: 'artist', info: 'some designing', price: '$900' },
        { imgsrc: "http://tachyons.io/img/avatar-mrmrs.jpg", name: 'artist', info: 'some designing', price: '$900' }
    ];
    const tasks = data.map((task, index) => (
        <li
            key={index}
            className='flex items-center lh-copy pa3 ph0-l bb b--black-10'
            onClick={e => { onClick(e, index) }}>
            <img className='w2 h2 w3-ns h3-ns br-100' src={task.imgsrc} alt='' />
            <div className='pl3 flex-auto'>
                <span className='f6 db black-70'>{task.name}</span>
                <span className='f6 db black-70'>{task.info}</span>
            </div>
            <div>
                <a href="tel:" className='f6 link blue hover-dark-gray'>{task.price}</a>
            </div>
        </li >
    ));

    return (
        <ul className='list pl0 mt0 measure center'>
            {tasks}
        </ul>
    );
}


// index rendering optimizations https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md