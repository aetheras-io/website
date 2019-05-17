import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import Typography from "@material-ui/core/Typography";
import { injectIntl, FormattedMessage } from 'react-intl';
import CONST from '../utils/const';
import IntlComponent from './shared/IntlComponent';

class JoinUs extends IntlComponent {
    render() {
        const { classes } = this.props;
        const { intlData } = this.state;

        if (!intlData) {
            return null;
        }

        const joinUs = intlData.joinUs;

        if (!joinUs) {
            return null;
        }

        return (
            <section className={usingClasses(classes, 'section')}>
                <div id="joinUs" className={usingClasses(classes, 'anchor')} />
                <Typography component="h2" variant="headline" className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="joinUs_title"
                        defaultMessage={'We are Hiring!'}
                    />
                </Typography>
                <p className={usingClasses(classes, 'bodyText')}>
                    {joinUs.messageBeforeLink}
                    <a target="_blank" href={CONST.recruitURL} rel="noopener noreferrer">
                        {joinUs.link}
                    </a>
                    {joinUs.messageAfterLink}
                </p>
            </section>
        );
    }
};

const styles = SHARED_STYLES;

export default withStyles(styles)(injectIntl(JoinUs));
