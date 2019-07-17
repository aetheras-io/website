import React from 'react';
import { withStyles } from '@material-ui/core';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { Link } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import CONST from '../utils/const';

const Footer = props => {
    const { classes } = props;
    return (
        <footer className={usingClasses(classes, 'footer')}>
            <div>
                <div className={usingClasses(classes, 'link')}>
                    <Link to={{ pathname: '/', state: { shouldScroll: true } }} className={usingClasses(classes, 'logoLink')}>
                        <img src="/images/aetheras-logo-standard-w-text.png" alt="logo" />
                    </Link>
                    <a href={CONST.githubURL} className={usingClasses(classes, 'linkIcon')} target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icon_git.svg" alt="github-icon" />
                    </a>
                    <a href={CONST.twitterURL} className={usingClasses(classes, 'linkIcon')} target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icon_twt.svg" alt="twitter-icon" />
                    </a>
                    <a href={CONST.discordURL} className={usingClasses(classes, 'linkIcon')} target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-icon_dcd.svg" alt="discord-icon" />
                    </a>
                </div>
                <div className={usingClasses(classes, 'copyright')}>
                    <span className={usingClasses(classes, 'copyrightText')}>Copyright © 2019 Heimdal Holdings Corp. All rights reserved | </span>
                    <a href={CONST.contactMail} className={usingClasses(classes, 'contactLink')}>
                        <FormattedMessage 
                        id="contact"
                        defaultMessage="Contact"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    footer: {
        height: STYLES_CONST.footerHeight,
        width: '100%',
        padding: '0 10%',
        color: 'white',
        backgroundColor: '#4C4948',
        position: 'absolute',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '60px'
    },
    logoLink: {
        marginRight: '56px'
    },
    linkIcon: {
        opacity: '0.6',
        transition: 'all 0.3s',
        '&:hover': {
            opacity: '1'
        },
        '&:not(:last-child)': {
            marginRight: '24px'
        }
    },
    copyrightText: Object.assign({...SHARED_STYLES.bodyText}, {
        opacity: '0.6'
    }),
    contactLink: {
        fontWeight: '700'
    }
});

export default withStyles(styles)(injectIntl(Footer));
