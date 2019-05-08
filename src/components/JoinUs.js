import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses } from '../utils/Style-Const';
import Typography from "@material-ui/core/Typography";

const link = 'https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=48524a733c3e466f383a426b40463e2193131312f483e527109j56&jobsource=checkc'

const JoinUs = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="joinUs" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'titleText')}>
                We are Hiring!
            </Typography>
            <p className={usingClasses(classes, 'bodyText')}>
                We are currently hiring for various roles at our Taipei office.
                Please visit our{' '}
                <a target="_blank" href={link} rel="noopener noreferrer">
                    104 page
                </a>{' '}
                for details.
            </p>
        </section>
    );
};

export default withStyles(getStyles({}))(JoinUs);
