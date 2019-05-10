import React from 'react';
import Cover from './Cover';
import News from './News';
// import NewsMedium from './NewsMedium';
import Agora from './Agora';
import Technology from './Technology';
import Partner from './Partner';
import JoinUs from './JoinUs';
import { SHARED_STYLES } from '../utils/SharedStyles';
import { withStyles } from '@material-ui/core';
import { usingClasses } from '../utils/utils';

const Home = props => {
    const { classes } = props;
    return (
        <div className={usingClasses(classes, 'wrapper')}>
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

const styles = SHARED_STYLES;

export default withStyles(styles)(Home);
