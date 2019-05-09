import React from 'react';
import { withStyles } from '@material-ui/core';
import { getStyles, usingClasses, NOTFOUND_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import { injectIntl, FormattedMessage } from 'react-intl';

const NotFound = props => {
    const { classes } = props;
    return (
        <div className={usingClasses(classes, 'notFound')}>
            <section className={usingClasses(classes, 'section')}>
                <Typography component="h2" variant="headline" id="notFound-title" className={usingClasses(classes, 'title')}>
                    <FormattedMessage
                        id="notFound_title"
                        defaultMessage={'404'}
                    />
                </Typography>
                <Typography component="h2" variant="title" id="notFound-subTitle" className={usingClasses(classes, 'subTitle')}>
                    <FormattedMessage
                        id="notFound_subTitle"
                        defaultMessage={'Page Not Found'}
                    />
                </Typography>
                <div className={usingClasses(classes, 'body')}>
                    <Typography component="h2" variant="body1" id="notFound-bodyText" className={usingClasses(classes, 'bodyText')}>
                        <FormattedMessage
                            id="notFound_message"
                            defaultMessage={'The page you visited either does not exist or has been moved in a website reshuffle.'}
                        />
                    </Typography>
                </div>
            </section>
        </div>
    );
}

export default withStyles(getStyles(NOTFOUND_STYLES))(injectIntl(NotFound))
