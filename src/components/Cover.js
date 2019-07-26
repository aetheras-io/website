import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { injectIntl, FormattedMessage } from 'react-intl';

const Cover = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'cover')}>
            <div id="cover" className={usingClasses(classes, 'anchor')} />
            <div className={usingClasses(classes, 'container')}>
                <div className={usingClasses(classes, 'titleContainer')}>
                    <span className={usingClasses(classes, 'title')}>
                        <FormattedMessage
                            id="cover_title"
                            defaultMessage={'Connecting Worlds'}
                        />
                    </span>
                    <span className={usingClasses(classes, 'slogan')}>
                        <FormattedMessage
                            id="cover_slogan"
                            defaultMessage={'Make the world more flexible with blockchain technology.'}
                        />
                    </span>
                    <Button variant="contained" color="primary" className={usingClasses(classes, 'button')}>
                        <Link to={{ pathname: '/', state: { shouldScroll: true, anchor: 'product' } }} className={usingClasses(classes, 'buttonLink')}>
                            <FormattedMessage
                                id="cover_button"
                                defaultMessage={'Learn More'}
                            />
                        </Link>
                    </Button>
                    <span className={usingClasses(classes, 'mobileIcon')}>
                        SCROLL
                        <img src="/images/expand_more.svg" alt="expand_more"/>
                    </span>
                </div>
            </div>
        </section>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    cover: {
        width: '100%',
        height: `calc(100vh - ${STYLES_CONST.navHeight})`,
        maxHeight: '1080px',
        padding: '16px 10% 0 10%',
        background: 'url("/images/jumbotron_bg-lg.svg") center center',
        backgroundSize: 'cover'
    },
    container: Object.assign({ ...SHARED_STYLES.container}, {
        alignItems: 'flex-start'
    }),
    titleContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: '64px',
        fontWeight: '700',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`,
    },
    slogan: {
        fontSize: '32px',
        marginTop: '24px',
        marginBottom: '56px'
    },
    mobileIcon: {
        alignSelf: 'center',
        fontSize: '16px',
        color: STYLES_CONST.primaryColor,
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '24px'
    }
});

export default withStyles(styles)(injectIntl(Cover));
