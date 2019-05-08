import React from 'react';
import { withStyles } from '@material-ui/core';
import { getStyles, usingClasses, NOTFOUND_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = props => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Navbar />
            <div className={usingClasses(classes, 'notFound')}>
                <section className={usingClasses(classes, 'section')}>
                    <Typography component="h2" variant="headline" id="notFound-title" className={usingClasses(classes, 'title')}>
                        404
                    </Typography>
                    <Typography component="h2" variant="title" id="notFound-subTitle" className={usingClasses(classes, 'subTitle')}>
                        Page Not Found
                    </Typography>
                    <div className={usingClasses(classes, 'body')}>
                        <Typography component="h2" variant="body1" id="notFound-bodyText" className={usingClasses(classes, 'bodyText')}>
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
