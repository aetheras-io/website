import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from '@material-ui/core/Typography';
import Build from '@material-ui/icons/Build';
import { injectIntl, FormattedMessage } from 'react-intl';

const Agora = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="agora" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                <FormattedMessage
                    id="agora_title"
                    defaultMessage={'Agora'}
                />
            </Typography>
            <div className={usingClasses(classes, 'build')}>
                <Build className={usingClasses(classes, 'buildIcon')} />
            </div>
        </section>
    );
};

const styles = SHARED_STYLES;

export default withStyles(styles)(injectIntl(Agora));
