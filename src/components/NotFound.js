import React from 'react';
import { withStyles } from '@material-ui/core';
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
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

const styles = Object.assign({ ...SHARED_STYLES }, {
    notFound: Object.assign({ ...SHARED_STYLES.wrapper }, {
        background: 'url("/images/background.png") 50% center'
    }),
    title: {
        fontSize: '4rem',
        letterSpacing: `${STYLES_CONST.letterSpacing * 8}px`,
        marginTop: `${STYLES_CONST.spacing * 4}px`,
        color: 'rgba(0, 0, 0, 0.64)'
    },
    subTitle: {
        marginBottom: `${STYLES_CONST.spacing * 1.5}px`,
        letterSpacing: `${STYLES_CONST.letterSpacing * 3}px`,
        color: 'rgba(0, 0, 0, 0.64)'
    },
    body: {
        marginTop: `${STYLES_CONST.spacing * 10}px`,
        padding: '0 16px'
    },
    bodyText: {
        fontSize: '1.7rem',
        letterSpacing: `${STYLES_CONST.letterSpacing * 2}px`,
        lineHeight: '2.3rem',
        color: 'rgba(0, 0, 0, 0.64)'
    }
})

export default withStyles(styles)(injectIntl(NotFound))
