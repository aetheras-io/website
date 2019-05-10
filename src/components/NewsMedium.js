import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
import Typography from '@material-ui/core/Typography';
import Build from '@material-ui/icons/Build';
import { injectIntl } from 'react-intl';

const NewsMedium = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="newsMedium" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                News (Medium)
            </Typography>
            <div className={usingClasses(classes, 'build')}>
                <Build className={usingClasses(classes, 'buildIcon')} />
            </div>
        </section>
    );
};

const styles = SHARED_STYLES;

export default withStyles(styles)(injectIntl(NewsMedium));
