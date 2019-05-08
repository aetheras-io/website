import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import { getStyles, usingClasses, FOOTER_STYLES } from '../utils/Style-Const';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import documentation from '../data/documentation';

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
                        <a href={documentation.contactMail}>Contact Us</a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={documentation.githubURL} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')} gutterBottom>
                        <a href={documentation.whitePaperURL} target="_blank" rel="noopener noreferrer">White Paper</a>
                    </Typography>
                </Grid>
                <Grid item xs={6} className={usingClasses(classes, 'gridItem')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')}>
                        More
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'linkText')}>
                        Address: <a href={documentation.addressURL} target="_blank" rel="noopener noreferrer">{documentation.addressName}</a>
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
