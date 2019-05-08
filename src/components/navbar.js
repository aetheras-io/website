import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getStyles, usingClasses, NAVBAR_STYLES } from '../utils/Style-Const';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class Navbar extends React.Component {
    state = {
        isMenuOpen: false
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

    openMenu = () => {
        this.setState({ isMenuOpen: true });
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    }

    render() {
        const { classes } = this.props;
        const { isMenuOpen } = this.state;
        return (
            // collapse
            <React.Fragment>
                <AppBar position="fixed" className={usingClasses(classes, 'navbar')}>
                    <Toolbar className={usingClasses(classes, 'toolbar')}>
                        <div className={usingClasses(classes, 'titleContainer')}>
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className={usingClasses(classes, 'logoImg')}
                            />
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={usingClasses(classes, 'titleLink')}>
                                <Link to='/#cover' className={usingClasses(classes, 'linkText')}>AETHERAS</Link>
                            </Typography>
                        </div>
                        <div className={usingClasses(classes, 'anchorContainer')}>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#news' className={usingClasses(classes, 'linkText')}>News</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#agora' className={usingClasses(classes, 'linkText')}>Agora</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#technology' className={usingClasses(classes, 'linkText')}>Technology</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#partner' className={usingClasses(classes, 'linkText')}>Partner</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={usingClasses(classes, 'link')}>
                                <Link to='/#joinUs' className={usingClasses(classes, 'linkText')}>Join Us</Link>
                            </Typography>
                        </div>
                        <div className={usingClasses(classes, 'mobileAnchorContainer')}>
                            <IconButton className={classes.menuButton} color="inherit" onClick={this.openMenu}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Menu
                    open={isMenuOpen}
                    onClose={this.closeMenu}
                    disableAutoFocusItem={true}
                    className={usingClasses(classes, 'mobileMenu')}
                    classes={{ paper: usingClasses(classes, 'mobileMenuPaper') }}
                    MenuListProps={{ disablePadding: true }}
                >
                    <MenuItem onClick={this.closeMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#news' className={usingClasses(classes, 'mobileLinkText')}>News</Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#agora' className={usingClasses(classes, 'mobileLinkText')}>Agora</Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#technology' className={usingClasses(classes, 'mobileLinkText')}>Technology</Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#partner' className={usingClasses(classes, 'mobileLinkText')}>Partner</Link>
                    </MenuItem>
                    <MenuItem onClick={this.closeMenu} className={usingClasses(classes, 'mobileMenuLink')}>
                        <Link to='/#joinUs' className={usingClasses(classes, 'mobileLinkText')}>Join Us</Link>
                    </MenuItem>
                </Menu>
            </React.Fragment >
        );
    }
};

export default withStyles(getStyles(NAVBAR_STYLES))(Navbar);
