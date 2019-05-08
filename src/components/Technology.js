import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getStyles, usingClasses, TECH_STYLES } from '../utils/Style-Const';
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const techList = [
    {
        title: 'Title',
        content: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.'
    },
    {
        title: 'Title',
        content: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.'
    },
    {
        title: 'Title',
        content: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.'
    },
    {
        title: 'Title',
        content: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.'
    },
    {
        title: 'Title',
        content: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.'
    },
    {
        title: 'Title',
        content: 'We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.'
    }
]

const getTechDOM = (techList, classes) => {
    let techDOM = null;
    if (techList && techList.length > 0) {
        techDOM = techList.map((tech, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
                <Paper elevation={1} className={usingClasses(classes, 'paper')}>
                    <Typography variant="title" className={usingClasses(classes, 'subTitleText')}>
                        {tech.title}
                    </Typography>
                    <Typography variant="body1" className={usingClasses(classes, 'bodyText')}>
                        {tech.content}
                    </Typography>
                </Paper>
            </Grid>
        ))
    }
    return techDOM;
}

const Technology = props => {
    const { classes } = props;
    const techDOM = getTechDOM(techList, classes);
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="technology" className={usingClasses(classes, 'anchor')} />
            <Typography component="h2" variant="headline" className={usingClasses(classes, 'headLine')}>
                Technology
            </Typography>
            <div className={usingClasses(classes, 'list')}>
                <Grid container spacing={16}>
                    {techDOM}
                </Grid>
            </div>
        </section>
    );
};

export default withStyles(getStyles(TECH_STYLES))(Technology);
