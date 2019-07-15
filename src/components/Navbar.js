import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import { STYLES_CONST, SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import { injectIntl, FormattedMessage } from 'react-intl';
import IntlComponent from './shared/IntlComponent';

const link = [
    {
        titleId: 'about_nav_title',
        defaultTitle: 'About',
        path: '/about'
    },
    {
        titleId: 'white_paper_title',
        defaultTitle: 'Whitepaper',
        path: '/AetherasWhitepaper.pdf',
        target: '_blank'
    },
    {
        titleId: 'testnet_title',
        defaultTitle: 'Testnet',
        path: '/testnet'
    },
    // {
    //     titleId: 'career_title',
    //     defaultTitle: 'Career',
    //     path: '/career'
    // }
]

class Navbar extends IntlComponent {
    state = {
        isNavMenuOpen: false,
        localeMenuAnchor: null
    };

    toggleNavMenu = () => {
        this.setState(prevState =>  {return { isNavMenuOpen: !prevState.isNavMenuOpen }});
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

    getLinkDOM = (linkList, classes, type) => {
        const pathname = window.location.pathname;
        if (!linkList || linkList.length === 0) {
            return null;
        }
        if (type === 'desktop') {
            return linkList.map(link => (
                <Link key={link.titleId} to={link.path} className={usingClasses(classes, 'linkText') + (pathname === link.path ? ' active' : '')} target={link.target}>
                    <FormattedMessage
                        id={link.titleId}
                        defaultMessage={link.defaultTitle}
                    />
                </Link>
            ));
        }
        if (type === 'mobile') {
            return linkList.map(link => (
                <MenuItem
                    onClick={this.closeNavMenu}
                    className={usingClasses(classes, 'mobileMenuLink')}
                    key={link.titleId}
                >
                    <Link to={link.path} className={usingClasses(classes, 'mobileLinkText')} target={link.target}>
                        <FormattedMessage
                            id={link.titleId}
                            defaultMessage={link.defalutTitle}
                        />
                    </Link>
                </MenuItem>
            ));
        }
        return null;
    }

    render() {
        // const { classes, intl, locale } = this.props;
        const { classes, locale } = this.props;
        const { isNavMenuOpen, localeMenuAnchor } = this.state;
        const isLocaleMenuOpen = Boolean(localeMenuAnchor);
        // const currentLocale = locale.find(l => l.locale === intl.locale);
        const linkDOM = this.getLinkDOM(link, classes, 'desktop');
        const mobileLinkDOM = this.getLinkDOM(link, classes, 'mobile');
        return (
            <React.Fragment>
                <AppBar position="absolute" className={usingClasses(classes, 'navbar')}>
                    <Toolbar className={usingClasses(classes, 'toolbar')}>
                        <div className={usingClasses(classes, 'nav')}>
                            <Link to={{ pathname: '/', state: { shouldScroll: true } }} className={usingClasses(classes, 'logoLink')}>
                                <img
                                    src="/images/aetheras-logo-standard.png"
                                    alt="Logo"
                                />
                            </Link>
                            <div className={usingClasses(classes, 'linkContainer')}>
                                {linkDOM}
                                {/* <Button className={usingClasses(classes, 'localeButton') + (isLocaleMenuOpen ? ' active' : '')} onClick={this.openLocaleMenu}>
                                    <span className={usingClasses(classes, 'bodyText')}>{currentLocale.shortDisplay}</span>
                                    <KeyboardArrowDown className={usingClasses(classes, 'localeIcon') + (isLocaleMenuOpen ? ' active' : '')} />
                                </Button> */}
                            </div>
                        </div>
                        <div className={usingClasses(classes, 'mobileNav')}>
                            <IconButton
                                className={usingClasses(classes, 'menuButton') + ' hamburger--squeeze' + (isNavMenuOpen ? ' is-active' : '')}
                                color="primary"
                                onClick={this.toggleNavMenu}
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </IconButton>
                            <Link
                                to={{ pathname: '/', state: { shouldScroll: true } }}
                                className={usingClasses(classes, 'mobileLogoLink')}
                                onClick={this.closeNavMenu}
                            >
                                <img
                                    src="/images/aetheras-logo-standard.png"
                                    alt="Logo"
                                    className={usingClasses(classes, 'mobileLogoImg')}
                                />
                            </Link>
                            <div></div>
                            {/* <Button className={usingClasses(classes, 'localeButton') + (isLocaleMenuOpen ? ' active' : '')} onClick={this.openLocaleMenu}>
                                <span className={usingClasses(classes, 'bodyText')}>{currentLocale.shortDisplay}</span>
                                <KeyboardArrowDown className={usingClasses(classes, 'localeIcon') + (isLocaleMenuOpen ? ' active' : '')} />
                            </Button> */}
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
                    {mobileLinkDOM}
                </Menu>
                <Menu
                    anchorEl={localeMenuAnchor}
                    open={isLocaleMenuOpen}
                    onClose={this.closeLocaleMenu}
                    className={usingClasses(classes, 'localeMenu')}
                    classes={{ paper: usingClasses(classes, 'localeMenuPaper') }}
                    disableAutoFocusItem={true}
                    MenuListProps={{ disablePadding: true }}
                >
                    <MenuItem className={usingClasses(classes, 'localeMenuTitle')} disabled>
                        <FormattedMessage
                            id="select_language"
                            defaultMessage="Select a Language"
                        />
                    </MenuItem>
                    {locale.map(l => (
                        <MenuItem onClick={this.selectLocale(l.code)} key={l.code} className={usingClasses(classes, 'localeMenuItem')}>
                            <span className={usingClasses(classes, 'bodyText')}>{l.display}</span>
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
        color: STYLES_CONST.fontColor,
        backgroundColor: '#fff',
        boxShadow: 'none'
    },
    toolbar: {
        height: '100%',
        minHeight: '60px',
        padding: '0',
    },
    nav: {
        width: '100%',
        padding: '0 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 'calc(1180px + 20%)',
        margin: '0 auto'
    },
    mobileNav: {
        display: 'none',
        width: '100%',
        height: '100%',
        padding: '0 20px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoLink: {
        height: '36px',
    },
    mobileLogoLink: {
        height: '24px',
    },
    mobileLogoImg: {
        height: '24px'
    },
    linkText: {
        height: '90px',
        lineHeight: '90px',
        fontSize: '16px',
        fontWeight: '500',
        textDecoration: 'unset',
        letterSpacing: `${STYLES_CONST.letterSpacing * 2}px`,
        display: 'inline-flex',
        boxSizing: 'border-box',
        transition: 'all 0.3s',
        '&:hover': {
            color: STYLES_CONST.primaryColor
        },
        '&.active': {
            borderBottom: `8px solid ${STYLES_CONST.primaryColor}`
        },
        '&:not(:last-of-type)': {
            marginRight: '36px'
        }
    },
    linkContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mobileMenu: {
        top: '60px !important'
    },
    mobileMenuPaper: {
        top: '0 !important',
        left: '0 !important',
        width: '100%',
        maxWidth: '100%',
        boxShadow: 'rgba(255, 77, 77, 0.2) 0px 10px 10px -5px',
        paddingTop: '20px',
        paddingBottom: '20px'
    },
    mobileMenuLink: {
        height: 'fit-content',
        padding: '12px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: STYLES_CONST.fontColor,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'unset',
            color: STYLES_CONST.primaryColor
        }
    },
    mobileLinkText: {
        fontSize: '16px',
        fontWeight: '500',
        textDecoration: 'unset',
        letterSpacing: `${STYLES_CONST.letterSpacing}px`
    },
    menuButton: {
        padding: '0',
        '&:hover': {
            backgroundColor: 'unset'
        }
    },
    localeButton: Object.assign({ ...SHARED_STYLES.flatButton }, {
        padding: '0',
        fontSize: '16px',
        minWidth: '48px',
        marginLeft: '36px',
        color: STYLES_CONST.fontColor
    }),
    localeIcon: {
        fontSize: '18px',
        width: '24px',
        height: '24px',
        color: STYLES_CONST.primaryColor,
        transition: 'all 0.3s',
        '&.active': {
            transform: 'rotate(-180deg)'
        }
    },
    localeMenuPaper: {
        top: '90px !important',
        left: 'unset !important',
        right: 'calc(10% + 6px) !important',
        width: '247px',
        boxShadow: 'rgba(255, 77, 77, 0.2) 0px 10px 30px 0px'
    },
    localeMenuList: {
        padding: '16px 0'
    },

    localeMenuTitle: {
        padding: '16px 32px',
        margin: '16px 0 8px 0',
        color: STYLES_CONST.secondaryColor,
        fontSize: '16px',
        fontWeight: '700',
        opacity: '1 !important',
        '&:hover': {
            backgroundColor: 'unset',
        }
    },
    localeMenuItem: {
        padding: '16px 32px',
        color: STYLES_CONST.fontColor,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'unset',
            color: STYLES_CONST.primaryColor
        },
        '&:last-child': {
            marginBottom: '16px'
        }
    },
    bodyText: Object.assign({ ...SHARED_STYLES.bodyText }, {
        fontWeight: '500'
    })
});

export default withStyles(styles)(injectIntl(Navbar));
