import React from 'react';
import { withStyles } from '@material-ui/core';
import { NOTFOUND_STYLES, getStyles } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = props => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Navbar />
            <div className={classes.notFound}>
                <section className={classes.section}>
                    <Typography component="h2" variant="headline" className={classes.titleText}>
                        404
                    </Typography>
                    <Typography component="h2" variant="title" className={classes.subTitleText}>
                        Page Not Found
                    </Typography>
                    <div className={classes.body}>
                        <Typography component="h2" variant="body1" className={classes.bodyText}>
                            The page you visited either does not exist or has been moved in a website reshuffle.
                        </Typography>
                    </div>
                </section>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default withStyles(getStyles(NOTFOUND_STYLES))(NotFound)
