import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getStyles, NAVBAR_STYLES } from '../utils/Style-Const';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

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

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={2}>
                            <Typography
                                variant="h6"
                                color="inherit"
                                className={classes.titleLink}>
                                <Link to='/#cover' className={classes.linkText}>AETHERAS</Link>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            className={classes.linkContainer}>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={classes.link}>
                                <Link to='/#news' className={classes.linkText}>News</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={classes.link}>
                                <Link to='/#agora' className={classes.linkText}>Agora</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={classes.link}>
                                <Link to='/#technology' className={classes.linkText}>Technology</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={classes.link}>
                                <Link to='/#partner' className={classes.linkText}>Partner</Link>
                            </Typography>
                            <Typography
                                variant="subheading"
                                color="inherit"
                                className={classes.link}>
                                <Link to='/#joinUs' className={classes.linkText}>Join Us</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
};

export default withStyles(getStyles(NAVBAR_STYLES))(Navbar);
