import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { STYLES_CONST, SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { injectIntl, FormattedMessage } from 'react-intl';

class Navbar extends React.Component {
    state = {
        isNavMenuOpen: false,
        localeMenuAnchor: null
    };

    componentDidMount() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.smothScrollIntoView);
        });
    }

    componentWillUnmount() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', this.smothScrollIntoView);
        });
    }

    smothScrollIntoView = e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }

    openNavMenu = () => {
        this.setState({ isNavMenuOpen: true });
    }

    closeNavMenu = () => {
        this.setState({ isNavMenuOpen: false });
    }

    openLocaleMenu = event => {
        this.setState({ localeMenuAnchor: event.currentTarget });
    };

    selectLocale = code => e => {
        this.closeNavMenu();
        this.closeLocaleMenu();

        const { setLocale, locale } = this.props;
        if (setLocale) {
            const currentLocale = locale.find(l => l.code === code);
            setLocale(currentLocale);
        }
    }

    closeLocaleMenu = () => {
        this.setState({ localeMenuAnchor: null });
    };

    render() {
        const { classes, intl, locale } = this.props;
        const { isNavMenuOpen, localeMenuAnchor } = this.state;
        const currentLocale = locale.find(l => l.locale === intl.locale);
        return (
            <React.Fragment>
                <AppBar position="fixed" className={usingClasses(classes, 'navbar')}>
                    <Toolbar className={usingClasses(classes, 'toolbar')}>
                        <div className={usingClasses(classes, 'titleContainer')}>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={usingClasses(classes, 'titleLink')}>
                                <Link to='/#cover' className={usingClasses(classes, 'linkText')}>
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo"
                                        className={usingClasses(classes, 'logoImg')}
                                    />
                                    AETHERAS
                                </Link>
                            </Typography>
                        </div>
                        <div className={usingClasses(classes, 'anchorContainer')}>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#news' className={usingClasses(classes, 'linkText')}>
                                    <FormattedMessage
                                        id="news_title"
                                        defaultMessage={'News'}
                                    />
                                </Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#agora' className={usingClasses(classes, 'linkText')}>
                                    <FormattedMessage
                                        id="agora_title"
                                        defaultMessage={'Agora'}
                                    />
                                </Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#technology' className={usingClasses(classes, 'linkText')}>
                                    <FormattedMessage
                                        id="tech_title"
                                        defaultMessage={'Technology'}
                                    />
                                </Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#partner' className={usingClasses(classes, 'linkText')}>
                                    <FormattedMessage
                                        id="partner_title"
                                        defaultMessage={'Partner'}
                                    />
                                </Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#joinUs' className={usingClasses(classes, 'linkText')}>
                                    <FormattedMessage
                                        id="joinUs_nav_title"
                                        defaultMessage={'Join Us'}
                                    />
                                </Link>
                            </Typography>
                            <IconButton className={usingClasses(classes, 'localeButton')} color="inherit" onClick={this.openLocaleMenu}>
                                <span className={`flag-icon flag-icon-squared flag-icon-${currentLocale.code}`}></span>
                            </IconButton>
                        </div>
                        <div className={usingClasses(classes, 'mobileAnchorContainer')}>
                            <IconButton className={usingClasses(classes, 'menuButton')} color="inherit" onClick={this.openNavMenu}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Menu
                    open={isNavMenuOpen}
                    onClose={this.closeNavMenu}
                    disableAutoFocusItem={true}
                    className={usingClasses(classes, 'mobileMenu')}
                    classes={{ paper: usingClasses(classes, 'mobileMenuPaper') }}
                    MenuListProps={{ disablePadding: true }}
                >
                    <MenuItem onClick={this.closeNavMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#news' className={usingClasses(classes, 'mobileLinkText')}>
                            <FormattedMessage
                                id="news_title"
                                defaultMessage={'News'}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeNavMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#agora' className={usingClasses(classes, 'mobileLinkText')}>
                            <FormattedMessage
                                id="agora_title"
                                defaultMessage={'Agora'}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeNavMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#technology' className={usingClasses(classes, 'mobileLinkText')}>
                            <FormattedMessage
                                id="tech_title"
                                defaultMessage={'Technology'}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeNavMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#partner' className={usingClasses(classes, 'mobileLinkText')}>
                            <FormattedMessage
                                id="partner_title"
                                defaultMessage={'Partner'}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeNavMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#joinUs' className={usingClasses(classes, 'mobileLinkText')}>
                            <FormattedMessage
                                id="joinUs_nav_title"
                                defaultMessage={'Join Us'}
                            />
                        </Link>
                    </MenuItem>
                    <li className={usingClasses(classes, 'mobileMenuLink')}>
                        {locale.map(l => (
                            <IconButton onClick={this.selectLocale(l.code)} key={l.code} className={usingClasses(classes, 'localeMenuItem')}>
                                <span className={`flag-icon flag-icon-squared flag-icon-${l.code}`} />
                            </IconButton>
                        ))}
                    </li>
                </Menu>
                <Menu
                    anchorEl={localeMenuAnchor}
                    open={Boolean(localeMenuAnchor)}
                    onClose={this.closeLocaleMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    className={usingClasses(classes, 'localeMenu')}
                    classes={{ paper: usingClasses(classes, 'localeMenuPaper') }}
                    disableAutoFocusItem={true}
                    MenuListProps={{ disablePadding: true }}
                >
                    {locale.map(l => (
                        <MenuItem onClick={this.selectLocale(l.code)} key={l.code} className={usingClasses(classes, 'localeMenuItem')}>
                            <span className={`flag-icon flag-icon-squared flag-icon-${l.code}`} />
                        </MenuItem>
                    ))}
                </Menu>
            </React.Fragment >
        );
    }
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    navbar: {
        height: STYLES_CONST.navHeight,
        color: 'rgba(0,0,0,0.82)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    toolbar: {
        height: '100%',
        paddingRight: `${STYLES_CONST.spacing * 0.5}px`,
        minHeight: STYLES_CONST.navHeight,
        justifyContent: 'space-between'
    },
    titleContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logoImg: {
        height: '33px',
        transform: 'translateY(-1px)',
        marginRight: `${STYLES_CONST.spacing}px`
    },
    titleLink: {
        width: 'fit-content',
        padding: `${STYLES_CONST.spacing}px`,
        letterSpacing: `${STYLES_CONST.letterSpacing * 4}px`,
        display: 'flex'
    },
    linkText: {
        textDecoration: 'unset',
        letterSpacing: `${STYLES_CONST.letterSpacing * 2}px`,
        display: 'inline-flex'
    },
    anchorContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mobileAnchorContainer: {
        display: 'none',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: `${STYLES_CONST.spacing}px`
    },
    mobileMenuPaper: {
        top: '0 !important',
        left: '0 !important',
        width: '100%',
        maxWidth: '100%',
        'ul': {
            paddingTop: '0',
            paddingBottom: '0'
        }
    },
    mobileMenuLink: {
        height: 'fit-content',
        padding: '0'
    },
    mobileLinkText: {
        width: '100%',
        height: '100%',
        padding: `${STYLES_CONST.spacing * 2}px`,
        textDecoration: 'unset',
        letterSpacing: `${STYLES_CONST.letterSpacing * 2}px`
    },
    link: {
        display: 'inline-flex',
        padding: `${STYLES_CONST.spacing}px`,
        marginLeft: `${STYLES_CONST.spacing}px`
    },
    localeMenuPaper: {
        top: '8px !important',
        right: '8px !important',
    },
    localeMenuItem: {
        padding: `${STYLES_CONST.spacing * 2}px`,
        justifyContent: 'center',

    }
});

export default withStyles(styles)(injectIntl(Navbar));
