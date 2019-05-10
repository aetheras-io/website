import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
import Typography from '@material-ui/core/Typography';
import { injectIntl, FormattedMessage } from 'react-intl';

const Cover = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'cover')}>
            <div id="cover" className={usingClasses(classes, 'anchor')} />
            <div className={usingClasses(classes, 'logoContainer')}>
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className={usingClasses(classes, 'logoImg')}
                />
                <div className={usingClasses(classes, 'titleContainer')}>
                    <Typography
                        id="logo-title"
                        variant="h4"
                        color="inherit"
                        className={usingClasses(classes, 'title')}>
                        AETHERAS
                    </Typography>
                    <Typography
                        id="logo-slogan"
                        variant="h6"
                        color="inherit"
                        className={usingClasses(classes, 'slogan')}>
                        <FormattedMessage
                            id="slogan"
                            defaultMessage={'Make the world more flexible with blockchain technology.'}
                        />
                    </Typography>
                </div>
            </div>
        </section>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    cover: {
        width: '100%',
        height: 'calc(100vw / 2)',
        maxHeight: '300px',
        padding: '16px 10% 0 10%',
        background: 'url("/images/background.png") 50% center'
    },
    logoContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logoImg: {
        display: 'inline-flex',
        height: '100%',
        maxHeight: '300px'
    },
    titleContainer: {
        height: '100%',
        paddingLeft: `${STYLES_CONST.spacing * 2}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-center'
    },
    title: {
        letterSpacing: `${STYLES_CONST.letterSpacing * 4}px`,
    },
    slogan: {
        marginTop: `${STYLES_CONST.spacing * 1.5}px`
    }
});

export default withStyles(styles)(injectIntl(Cover));
