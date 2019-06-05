import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
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
            <div className={usingClasses(classes, 'titleContainer')}>
                <span className={usingClasses(classes, 'title')}>
                    Lorem ipsum dolor sit
                </span>
                <span className={usingClasses(classes, 'slogan')}>
                    <FormattedMessage
                        id="cover_slogan"
                        defaultMessage={'Make the world more flexible with blockchain technology.'}
                    />
                </span>
                <Button variant="contained" color="primary" className={usingClasses(classes, 'button')}>
                    <Link to={{ pathname: '/', state: { shouldScroll: true, anchor: 'product' } }} className={usingClasses(classes, 'buttonLink')}>
                        Button
                    </Link>
                </Button>
                <KeyboardArrowDown className={usingClasses(classes, 'mobileIcon')}/>
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
        fontSize: '64px',
        color: STYLES_CONST.primaryColor,
        display: 'none'
    }
});

export default withStyles(styles)(injectIntl(Cover));
