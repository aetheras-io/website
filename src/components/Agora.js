import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import Build from '@material-ui/icons/Build';

const Agora = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="agora" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                Agora
            </Typography>
            <div className={usingClasses(classes, 'build')}>
                <Build className={usingClasses(classes, 'buildIcon')} />
            </div>
        </section>
    );
};

export default withStyles(getStyles({}))(Agora);
