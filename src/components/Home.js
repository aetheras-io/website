import React from 'react';
import Cover from './Cover';
import News from './News';
// import NewsMedium from './NewsMedium';
import Agora from './Agora';
import Technology from './Technology';
import Partner from './Partner';
import JoinUs from './JoinUs';

const Home = props => {
    return (
        <div>
            <Cover />
            <News />
            {/* <NewsMedium /> */}
            <Agora />
            <Technology />
            <Partner />
            <JoinUs />
        </div>
    );
};

export default Home;
