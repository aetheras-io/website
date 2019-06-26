import React from 'react';
import Cover from './Cover';
import Product from './Product';
// import Founder from './Founder';
import Technology from './Technology';
import JoinUs from './Join-Us';
import { SHARED_STYLES } from '../utils/shared-styles';
import { withStyles } from '@material-ui/core';
import { usingClasses } from '../utils/utils';

const Home = props => {
    const { classes } = props;
    return (
        <div className={usingClasses(classes, 'wrapper')}>
            <Cover />
            <Product />
            <Technology />
            {/* <Founder /> */}
            <div id="to-top-trigger" />
            <JoinUs />
        </div>
    );
};

const styles = SHARED_STYLES;

export default withStyles(styles)(Home);
