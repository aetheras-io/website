import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import en_US from '../data/documentation/en_US';
import zh_TW from '../data/documentation/zh_TW';
import { injectIntl, FormattedMessage } from 'react-intl';

const localeData = { en: en_US, zh: zh_TW };

const Footer = props => {
    const { classes, intl } = props;
    const locale = intl.locale
    const documentation = localeData[locale] ? localeData[locale] : localeData[intl.defaultLocale];
    return (
        <footer className={usingClasses(classes, 'footer')}>
            <Grid container className={usingClasses(classes, 'gridContainer')}>
                <Grid item xs={6} sm={3} className={usingClasses(classes, 'gridItem')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')} gutterBottom>
                        <FormattedMessage
                            id="getHelp"
                            defaultMessage={'Get Help'}
                        />
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <Link to='/about' href='#'>
                            <FormattedMessage
                                id="aboutUs_title"
                                defaultMessage={'About Us'}
                            />
                        </Link>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={documentation.contactMail}>
                            <FormattedMessage
                                id="contactUs"
                                defaultMessage={'Contact Us'}
                            />
                        </a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={documentation.whitePaperURL} target="_blank" rel="noopener noreferrer">
                            <FormattedMessage
                                id="whitePaper"
                                defaultMessage={'White Paper'}
                            />
                        </a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={documentation.githubURL} target="_blank" rel="noopener noreferrer">
                            <FormattedMessage
                                id="github"
                                defaultMessage={'GitHub'}
                            />
                        </a>
                    </Typography>
                </Grid>
                <Grid item xs={6} className={usingClasses(classes, 'gridItem')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')}>
                        <FormattedMessage
                            id="more"
                            defaultMessage={'More'}
                        />
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')}>
                        <FormattedMessage
                            id="address"
                            defaultMessage={'Address'}
                        />: <a href={documentation.addressURL} target="_blank" rel="noopener noreferrer">{documentation.addressName}</a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'copyright')}>
                        Heimdal Holdings Corp.
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    footer: {
        height: '200px',
        width: '100%',
        padding: '0 10%',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        position: 'absolute',
        bottom: '0'
    },
    gridContainer: {
        height: '100%',
        position: 'relative'
    },
    gridItem: {
        height: '100%',
        padding: `${STYLES_CONST.spacing * 1.5}px`,
    },
    subTitleText: Object.assign({ ...SHARED_STYLES.subTitleText }, {
        color: 'whitesmoke',
    }),
    linkText: {
        color: 'whitesmoke',
        fontSize: '0.955rem',
        letterSpacing: `${STYLES_CONST.letterSpacing * 1.5}px`
    },
    copyright: {
        height: '24px',
        position: 'absolute',
        bottom: '8px',
        right: '0',
        color: 'whitesmoke',
    }
});

export default withStyles(styles)(injectIntl(Footer));
