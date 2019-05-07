import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, COVER_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';

const Cover = props => {
    const { classes } = props;
    return (
        <section className={classes.cover}>
            <div id="cover" className={classes.archor} />
            <div className={classes.logoContainer}>
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className={classes.logoImg}
                />
            </div>
            <div className={classes.titleContainer}>
                <Typography
                    variant="h4"
                    color="inherit"
                    className={classes.title}>
                    AETHERAS
                </Typography>
                <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.slogan}>
                    Make the world more flexible with blockchain technology.
                </Typography>
            </div>
        </section>
    );
};

export default withStyles(getStyles(COVER_STYLES))(Cover);
