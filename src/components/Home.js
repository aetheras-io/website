import React from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import News from './News';
// import NewsMedium from './NewsMedium';
import Agora from './Agora';
import Technology from './Technology';
import Partner from './Partner';
import JoinUs from './JoinUs';
import Footer from './Footer';

const Home = props => {
    return (
        <div>
            <Navbar />
            <Cover />
            <News />
            {/* <NewsMedium /> */}
            <Agora />
            <Technology />
            <Partner />
            <JoinUs />
            <Footer />
        </div>
    );
};

export default Home;
