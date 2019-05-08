import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import { getStyles, usingClasses, FOOTER_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const email = 'mailto:inquiry@aetheras.io';
const whitePaper = 'https://github.com/aetheras-io';
const github = 'https://github.com/aetheras-io';
const address = 'https://www.google.com.tw/maps/place/10491%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E6%9D%BE%E6%B1%9F%E8%B7%AF139%E8%99%9F%E6%A8%93%E4%B9%8B4/@25.0551209,121.5310811,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a95e2641b4ef:0xc4d6eb589e692817!8m2!3d25.0551209!4d121.5332751?hl=zh-TW';

const Footer = props => {
    const { classes } = props;
    return (
        <footer className={usingClasses(classes, 'footer')}>
            <Grid container className={usingClasses(classes, 'gridContainer')}>
                <Grid item xs={6} sm={3} className={usingClasses(classes, 'gridItem')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')} gutterBottom>
                        Get Help
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <Link to='/about' href='#'>About Us</Link>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={email}>Contact Us</a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={whitePaper} target="_blank" rel="noopener noreferrer">White Paper</a>
                    </Typography>
                </Grid>
                <Grid item xs={6} className={usingClasses(classes, 'gridItem')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')}>
                        More
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')}>
                        Address: <a href={address} target="_blank" rel="noopener noreferrer">台北市中山區松江路139號8樓之4</a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'copyright')}>
                        Heimdal Holdings Corp.
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
};

export default withStyles(getStyles(FOOTER_STYLES))(Footer);
