import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import Build from '@material-ui/icons/Build';

const Agora = props => {
    const { classes } = props;
    return (
        <section className={classes.section}>
            <div id="agora" className={classes.archor} />
            <Typography component="h2" variant="headline" className={classes.titleText}>
                Agora
            </Typography>
            <div className={classes.build}>
                <Build className={classes.buildIcon} />
            </div>
        </section>
    );
};

export default withStyles(getStyles({}))(Agora);
